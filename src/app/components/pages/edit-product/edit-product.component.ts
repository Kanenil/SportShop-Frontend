import {Component, OnInit} from '@angular/core';
import {ICategory} from "../../../models/category/category.model";
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../../../services/product.service";
import {CategoryService} from "../../../services/category.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html'
})
export class EditProductComponent implements OnInit {

  public categories: ICategory[] = []
  form: FormGroup = new FormGroup({
    title: new FormControl(''),
    price: new FormControl(''),
    color: new FormControl(''),
    size: new FormControl(''),
    brand: new FormControl(''),
    category: new FormControl(''),
    idProduct: new FormControl(''),
  });
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private categoryService: CategoryService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];

      this.productService.getProductById(id).subscribe(resp=>{
        this.categoryService.getAll().subscribe(categories=>{
          this.categories = categories
          this.form = this.formBuilder.group(
            {
              title: [resp.title, [Validators.required]],
              price: [resp.price, [Validators.required, Validators.min(0.01)]],
              color: [resp.color, [Validators.required]],
              size: [resp.size, [Validators.required]],
              brand: [resp.brand, [Validators.required]],
              category: [categories.find(a=>a.idCategory == resp.category.idCategory), [Validators.required]],
              idProduct: [resp.idProduct, [Validators.required]],
            }
          );
        })
      }, error => {
        this.router.navigate(['/admin', 'products'], {replaceUrl: true})
      })
    })
  }

  changeCategory(e: any) {
    this.categoryName?.setValue(e.target.value, {
      onlySelf: true,
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  get categoryName() {
    return this.form.get('category');
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    this.productService.update(this.form.value).subscribe(resp=>{
      this.router.navigate(['/admin','products'])
    })
  }

}
