import {Component, OnInit} from '@angular/core';
import {IBreadcrumb} from "../../common/breadcrumb/breadcrumb.model";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../../services/product.service";
import {IProduct} from "../../../models/product/product.model";

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html'
})
export class SingleProductComponent implements OnInit {

  public sizes: string[] = ["XXS", "XS", "S", "M", "L", "XL", "2XL", "3XL"]
  public breadcrumbs!: IBreadcrumb[];
  public product!: IProduct;
  public images!: string[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public productService: ProductService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get("id") || "1";
      const product = this.productService.getProductById(id)

      if(product) {
        this.product = product;
        this.images = this.productService.getAllImages();
        this.breadcrumbs = [
          {title: "Products", link: ["/products"]},
          {title: product.name, link: ["/products", id]},
        ]
      } else {
        this.router.navigate(["/products"], {replaceUrl: true});
      }
    })
  }



}
