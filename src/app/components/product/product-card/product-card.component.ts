import {Component, Input} from '@angular/core';
import {IProduct} from "../../../models/product/product.model";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html'
})
export class ProductCardComponent {

  @Input() product!: IProduct;
  @Input() image!: string;
  @Input() isInCart!: boolean;

}
