import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {CategoryService} from "../../../services/category.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html'
})
export class EditCategoryComponent implements OnInit {

  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    idCategory: new FormControl(''),
  });
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.categoryService.getById(id).subscribe(resp=>{
        this.form = this.formBuilder.group(
          {
            name: [resp.name, [Validators.required]],
            idCategory: [resp.idCategory, [Validators.required]],
          }
        );
      },error => {
        this.router.navigate(['/admin', 'categories'], {replaceUrl: true})
      })
    })
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    this.categoryService.update(this.form.value).subscribe(resp=>{
      this.router.navigate(['/admin','categories'])
    })
  }
}
