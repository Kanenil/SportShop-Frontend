import {Component, Input} from '@angular/core';
import {IProduct} from "../../../models/product/product.model";
import {CartService} from "../../../services/cart.service";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html'
})
export class ProductCardComponent {

  @Input() product!: IProduct;
  @Input() image!: string;

  constructor(
    public cartService: CartService
  ) {}

}
