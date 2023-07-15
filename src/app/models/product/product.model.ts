import {ICategory} from "../category/category.model";

export interface IProduct {
  idProduct: number,
  name: string,
  price: number,
  color: string,
  size: string,
  brand: string,
  category: ICategory,
}

export class Product implements IProduct {
  constructor(
    public idProduct: number,
    public name: string,
    public price: number,
    public color: string,
    public size: string,
    public brand: string,
    public category: ICategory
  ) {}
}
