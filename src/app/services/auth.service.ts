import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IRegister} from "../models/auth/register.model";
import {ILogin} from "../models/auth/login.model";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private http: HttpClient
  ) { }

  login(model: ILogin) {
    return this.http.post<any>(`${environment.apiUrl}/auth/signin`, model);
  }

  register(model: IRegister) {
    return this.http.post<any>(`${environment.apiUrl}/auth/signup`, {...model, username: model.email});
  }

  logout() {
    return this.http.post<any>(`${environment.apiUrl}/auth/logout`, null);
  }

}
