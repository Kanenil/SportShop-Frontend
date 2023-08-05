import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {IOrderHistory} from "../models/order/order-history.model";

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

}
