import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../../services/product.service";
import {CategoryService} from "../../../services/category.service";
import {IProduct} from "../../../models/product/product.model";
import {ImageService} from "../../../services/image.service";
import {Image} from "../../../models/image/image.model";
import {map} from "rxjs";
import {ICategory} from "../../../models/category/category.model";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  public products!: IProduct[]
  public categories!: ICategory[]

  constructor(
    private productService: ProductService,
    public imageService: ImageService,
    public categoryService: CategoryService
  ) {}


  ngOnInit(): void {
    this.productService.getAll().subscribe(resp=>{
      this.products = []
      for (const iProduct of resp) {
        this.imageService.getAllImages(iProduct.idProduct).subscribe(images=>{
          iProduct.images = images
          this.products.push(iProduct)
        })
      }
    })
    this.categoryService.getAll().subscribe(resp=>{
      this.categories = resp
    })
  }

}
