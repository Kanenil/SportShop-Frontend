import { Component } from '@angular/core';
import {CategoryService} from "../../../services/category.service";
import {ProductService} from "../../../services/product.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent {

  constructor(
    public categoryService: CategoryService,
    public productService: ProductService
  ) {}

}
