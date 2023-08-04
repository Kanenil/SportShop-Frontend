import {ICategory} from "../category/category.model";
import {IImage} from "../image/image.model";

export interface IProduct {
  idProduct: number,
  title: string,
  price: number,
  color: string,
  size: string,
  brand: string,
  category: ICategory,
  images?: IImage[]
}

