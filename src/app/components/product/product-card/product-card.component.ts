import {Component, Input} from '@angular/core';
import {IProduct} from "../../../models/product/product.model";
import {CartService} from "../../../services/cart.service";
import {IImage} from "../../../models/image/image.model";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html'
})
export class ProductCardComponent {

  @Input() product!: IProduct;
  @Input() image!: IImage | null;

  constructor(
    public cartService: CartService
  ) {}

}
