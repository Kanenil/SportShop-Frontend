import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IProduct} from "../models/product/product.model";
import {environment} from "../../environments/environment";
import {IUser} from "../models/user/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUser() : Observable<IUser> {
    return this.http.get<IUser>(`${environment.apiUrl}/user/`);
  }
}
