import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {IOrderHistory} from "../models/order/order-history.model";
import {IOrderAdmin} from "../models/order/order-admin.model";
import {IOrderStatus} from "../models/order/order-status.model";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private http: HttpClient
  ) { }

  makeOrder() {
    return this.http.post<any>(`${environment.apiUrl}/order/makeOrder`, null)
  }

  history() {
    return this.http.get<IOrderHistory[]>(`${environment.apiUrl}/order/history`)
  }

  getAllOrders() {
    return this.http.get<IOrderAdmin[]>(`${environment.apiUrl}/admin/order/getAll`)
  }

  getAllOrderStatuses() {
    return this.http.get<IOrderStatus[]>(`${environment.apiUrl}/admin/orderStatus/all`)
  }

  editOrderStatus(order: IOrderAdmin, status: IOrderStatus) {
    return this.http.put<IOrderStatus[]>(`${environment.apiUrl}/admin/order/${order.orderId}/status/${status.idOrderStatus}`, null)
  }

}
