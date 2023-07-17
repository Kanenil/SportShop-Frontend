import {Component, Input, OnInit} from '@angular/core';
import {ICartProduct} from "../../../models/product/cart-product.model";
import {CartService} from "../../../services/cart.service";
import {ProductService} from "../../../services/product.service";

@Component({
  selector: 'app-cart-product-card',
  templateUrl: './cart-product-card.component.html'
})
export class CartProductCardComponent implements OnInit {

  @Input() product!: ICartProduct;
  public  image!: string;

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.image = this.productService.getImageById(this.product.product.idProduct - 1);
  }

  removeFromCart() {
    this.cartService.removeProductFromCart(this.product);
  }

  changeQuantity(newQuantity: number) {
    if(newQuantity > 99)
      newQuantity = 99;
    else if(newQuantity <= 0)
      newQuantity = 1;

    this.cartService.changeQuantity(this.product, newQuantity - this.product.quantity);
    this.product.quantity = newQuantity;
  }

  onChange(event: Event) {
    // @ts-ignore
    this.changeQuantity(event.target.value);
  }

}
