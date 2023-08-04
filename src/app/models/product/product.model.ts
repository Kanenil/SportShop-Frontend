import {ICategory} from "../category/category.model";

export interface IProduct {
  idProduct: number,
  title: string,
  price: number,
  color: string,
  size: string,
  brand: string,
  category: ICategory,
}

