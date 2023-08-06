import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IProduct} from "../models/product/product.model";
import {environment} from "../../environments/environment";
import {IUser} from "../models/user/user.model";
import {IUserRole} from "../models/user/user-role.model";
import {IUserAdmin} from "../models/user/user-admin.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUser() : Observable<IUser> {
    return this.http.get<IUser>(`${environment.apiUrl}/user/`);
  }

  getAllUsers() : Observable<IUserAdmin[]> {
    return this.http.get<IUserAdmin[]>(`${environment.apiUrl}/admin/getAllUsers`);
  }

  getAllRoles() : Observable<IUserRole[]> {
    return this.http.get<IUserRole[]>(`${environment.apiUrl}/admin/roles/all`);
  }

  putUserRoles(user:IUserAdmin, roles: IUserRole[]) : Observable<IUserRole[]> {
    return this.http.put<IUserRole[]>(`${environment.apiUrl}/admin/user/${user.id}/roles`, {roles});
  }

  getRoles() : Observable<IUserRole[]> {
    return this.http.get<IUserRole[]>(`${environment.apiUrl}/user/getRoles`);
  }
}
