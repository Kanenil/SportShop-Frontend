import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../../services/product.service";
import {IProduct} from "../../../models/product/product.model";

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html'
})
export class AdminProductsComponent implements OnInit {
  public products: IProduct[] = []

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.updateList()
  }

  onDelete(id: number) {
    this.productService.delete(id).subscribe(resp=>{
      this.updateList()
    }, error => {
      this.updateList()
    })
  }

  private updateList() {
    this.productService.getAll().subscribe(resp=>{
      this.products = resp
    })
  }

}
