import {Component, OnInit} from '@angular/core';
import {OrderService} from "../../../services/order.service";
import {IOrderHistory} from "../../../models/order/order-history.model";

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html'
})
export class OrderHistoryComponent implements OnInit {

  public orders!: IOrderHistory[]

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.orderService.history().subscribe(resp=>{
      this.orders = resp
      console.log(resp)
    })
  }

}
