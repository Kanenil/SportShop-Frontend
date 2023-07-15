import { Component } from '@angular/core';
import {ProductService} from "../../../services/product.service";
import {CategoryService} from "../../../services/category.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  constructor(
    public productService: ProductService,
    public categoryService: CategoryService
  ) {}

}
