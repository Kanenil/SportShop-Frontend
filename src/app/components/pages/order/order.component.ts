import {Component, OnInit} from '@angular/core';
import {CartService} from "../../../services/cart.service";
import {OrderService} from "../../../services/order.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html'
})
export class OrderComponent {

  constructor(
    public cartService: CartService,
    private orderService: OrderService,
    private router: Router
    ) {}

  makeOrder() {
    this.cartService.clearCart()
    this.orderService.makeOrder().subscribe(()=>{
      this.router.navigate(['/order', 'history'], {replaceUrl: true})
    })
  }
}
