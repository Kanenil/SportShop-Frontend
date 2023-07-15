import { Injectable } from '@angular/core';
import {ICategory} from "../models/category/category.model";

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
  constructor() { }

  getAll() : ICategory[] {
    return CATEGORIES;
  }

  getImageById(id: number) : string {
    return IMAGES[id];
  }

}
