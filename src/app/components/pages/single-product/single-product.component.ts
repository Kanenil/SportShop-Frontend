import {Component, OnInit} from '@angular/core';
import {IBreadcrumb} from "../../common/breadcrumb/breadcrumb.model";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../../services/product.service";
import {IProduct} from "../../../models/product/product.model";
import {CartService} from "../../../services/cart.service";
import {ImageService} from "../../../services/image.service";

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html'
})
export class SingleProductComponent implements OnInit {

  public sizes: string[] = ["XXS", "XS", "S", "M", "L", "XL", "2XL", "3XL"]
  public breadcrumbs!: IBreadcrumb[];
  public product!: IProduct;
  public products!: IProduct[];
  public images!: string[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public productService: ProductService,
    public imageService: ImageService,
    public cartService: CartService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get("id") || "1";
      this.productService.getProductById(id).subscribe(resp => {
        this.product = resp;

        this.images = this.productService.getAllImages();
        this.breadcrumbs = [
          {title: "Products", link: ["/products"]},
          {title: resp.title, link: ["/products", id]},
        ]

        this.productService.getAll().subscribe(resp=>{
          this.products = []
          for (const iProduct of resp) {
            this.imageService.getAllImages(iProduct.idProduct).subscribe(images=>{
              iProduct.images = images
              this.products.push(iProduct)
            })
          }
        })
      }, error => {
        this.router.navigate(["/products"], {replaceUrl: true});
      })
    })
  }



}
