import { Injectable } from '@angular/core';
import {ICategory} from "../models/category/category.model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

const CATEGORIES: ICategory[] = [
  { idCategory: 1, name: "T-Shirts" },
  { idCategory: 2, name: "Shorts" },
  { idCategory: 3, name: "Joggers" },
  { idCategory: 4, name: "Trainers" },
  { idCategory: 5, name: "Socks" },
  { idCategory: 6, name: "Boots" },
]

const IMAGES: string[] = [
  "https://xcdn.next.co.uk/COMMON/Items/Default/Default/Publications/G76/shotview/2035/C10-636s.jpg",
  "https://xcdn.next.co.uk/COMMON/Items/Default/Default/ItemImages/AltItemShot/315x472/C08303s.jpg",
  "https://xcdn.next.co.uk/COMMON/Items/Default/Default/Publications/G75/shotview/4104/428-930s.jpg",
  "https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/MHC477s.jpg",
  "https://xcdn.next.co.uk/COMMON/Items/Default/Default/ItemImages/AltItemShot/315x472/512152s2.jpg",
  "https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/C07825s.jpg"
]

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<ICategory[]>(`${environment.apiUrl}/category/all`);
  }

  getById(id: number | string) {
    return this.http.get<ICategory>(`${environment.apiUrl}/category/${id}`);
  }

  create(model: ICategory) {
    return this.http.post<ICategory>(`${environment.apiUrl}/admin/category/create`, model)
  }

  update(model: ICategory) {
    return this.http.put<ICategory>(`${environment.apiUrl}/admin/category/update/${model.idCategory}`, model)
  }

  delete(id: number) {
    return this.http.delete<any>(`${environment.apiUrl}/admin/category/delete/${id}`)
  }

  getImageById(id: number) : string {
    return IMAGES[id];
  }

}
