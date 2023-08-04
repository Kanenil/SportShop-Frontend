import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../../services/product.service";
import {IBreadcrumb} from "../../common/breadcrumb/breadcrumb.model";
import {IProduct} from "../../../models/product/product.model";
import {ImageService} from "../../../services/image.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {

  public products!: IProduct[]

  public breadcrumbs: IBreadcrumb[] = [
    {title: "Products", link: ["/products"]}
  ]

  constructor(
    public productService: ProductService,
    public imageService: ImageService,
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
  }

}
