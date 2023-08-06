import { Injectable } from '@angular/core';
import {IProduct} from "../models/product/product.model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {ICategory} from "../models/category/category.model";


const IMAGES: string[] = [
  "https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/D33001s.jpg",
  "https://xcdn.next.co.uk/COMMON/Items/Default/Default/Publications/G27/shotview/460/755-078s.jpg",
  "https://xcdn.next.co.uk/COMMON/Items/Default/Default/ItemImages/AltItemShot/315x472/407223s2.jpg",
  "https://xcdn.next.co.uk/COMMON/Items/Default/Default/ItemImages/AltItemShot/315x472/519224s2.jpg"
]

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }

  getAll() : Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${environment.apiUrl}/product/all`);
  }

  create(model: IProduct) {
    return this.http.post<IProduct>(`${environment.apiUrl}/admin/product/create`, model)
  }

  update(model: IProduct) {
    return this.http.put<IProduct>(`${environment.apiUrl}/admin/product/update/${model.idProduct}`, model)
  }

  delete(id: number) {
    return this.http.delete<any>(`${environment.apiUrl}/admin/product/delete/${id}`)
  }

  getAllImages() : string[] {
    return IMAGES;
  }

  getImageById(id: number) {
    return IMAGES[id];
  }

  getProductById(id: number | string) {
    return this.http.get<IProduct>(`${environment.apiUrl}/product/${id}`);
  }

}
