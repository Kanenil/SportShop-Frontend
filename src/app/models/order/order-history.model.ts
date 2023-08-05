import {IOrder} from "./order.model";
import {ICartProduct} from "../product/cart-product.model";

export interface IOrderHistory {
  order: IOrder,
  products: ICartProduct[]
}
