import { Component } from '@angular/core';
import {ProductService} from "../../../services/product.service";
import {IBreadcrumb} from "../../common/breadcrumb/breadcrumb.model";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent {

  public breadcrumbs: IBreadcrumb[] = [
    {title: "Products", link: ["/products"]}
  ]

  constructor(
    public productService: ProductService
  ) {}

}
