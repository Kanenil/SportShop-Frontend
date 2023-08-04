import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../../services/product.service";
import {CategoryService} from "../../../services/category.service";
import {IProduct} from "../../../models/product/product.model";
import {ImageService} from "../../../services/image.service";
import {Image} from "../../../models/image/image.model";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  public products!: IProduct[]

  constructor(
    public productService: ProductService,
    public imageService: ImageService,
    public categoryService: CategoryService
  ) {}


  ngOnInit(): void {
    this.productService.getAll().subscribe(resp=>{
      this.products = resp
    })
  }

}
