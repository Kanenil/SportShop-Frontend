import {Component, OnInit} from '@angular/core';
import {OrderService} from "../../../services/order.service";
import {IOrderStatus} from "../../../models/order/order-status.model";
import {IOrderAdmin} from "../../../models/order/order-admin.model";

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html'
})
export class AdminOrdersComponent implements OnInit {
  public orders: IOrderAdmin[] = []
  public orderStatuses: IOrderStatus[] = []

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.loadList()
    this.orderService.getAllOrderStatuses().subscribe(resp=>{
      this.orderStatuses = resp
    })
  }

  onChangeStatus(order: IOrderAdmin, e: any) {
    this.orderService.editOrderStatus(order, this.orderStatuses.find(o=>o.name == e.target.value.toUpperCase()) || this.orderStatuses[0]).subscribe(resp=>{
      this.loadList()
    })
  }

  private loadList() {
    this.orderService.getAllOrders().subscribe(resp=>{
      this.orders = resp
    })
  }

}
