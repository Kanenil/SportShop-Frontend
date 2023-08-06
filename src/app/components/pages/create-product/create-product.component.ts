import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ProductService} from "../../../services/product.service";
import {CategoryService} from "../../../services/category.service";
import {ICategory} from "../../../models/category/category.model";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html'
})
export class CreateProductComponent implements OnInit {

  public categories: ICategory[] = []
  form: FormGroup = new FormGroup({
    title: new FormControl(''),
    price: new FormControl(''),
    color: new FormControl(''),
    size: new FormControl(''),
    brand: new FormControl(''),
    category: new FormControl(''),
  });
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private categoryService: CategoryService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe(resp=>{
      this.categories = resp
      this.form = this.formBuilder.group(
        {
          title: ['', [Validators.required]],
          price: ['', [Validators.required, Validators.min(0.01)]],
          color: ['', [Validators.required]],
          size: ['', [Validators.required]],
          brand: ['', [Validators.required]],
          category: [resp[0], [Validators.required]],
        }
      );
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

    this.productService.create(this.form.value).subscribe(resp=>{
      this.router.navigate(['/admin','products'])
    })

  }

}
