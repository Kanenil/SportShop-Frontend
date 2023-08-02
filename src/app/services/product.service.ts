import { Injectable } from '@angular/core';
import {IProduct} from "../models/product/product.model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

const PRODUCTS: IProduct[] = [
  {
    idProduct: 1,
    name: "Sports T-Shirt",
    price: 5.99,
    color: "white",
    size: "M",
    brand: "Adidas",
    category: {
      idCategory: 1,
      name: "T-Shirts"
    }
  },
  {
    idProduct: 2,
    name: "Football Sports Short",
    price: 4.99,
    color: "blue",
    size: "M",
    brand: "Adidas",
    category: {
      idCategory: 2,
      name: "Shorts"
    }
  },
  {
    idProduct: 3,
    name: "Jogger",
    price: 9.99,
    color: "black",
    size: "L",
    brand: "Adidas",
    category: {
      idCategory: 3,
      name: "Joggers"
    }
  },
  {
    idProduct: 4,
    name: "Jogger",
    price: 7.99,
    color: "blue",
    size: "M",
    brand: "Adidas",
    category: {
      idCategory: 3,
      name: "Joggers"
    }
  }
]

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

  getAllImages() : string[] {
    return IMAGES;
  }

  getImageById(id: number) {
    return IMAGES[id];
  }

  getProductById(id: number | string) {
    const product = PRODUCTS.find(prod => prod.idProduct == id);

    return product;
  }

}
