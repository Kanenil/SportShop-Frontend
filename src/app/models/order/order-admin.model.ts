import {IUser} from "../user/user.model";
import {IProduct} from "../product/product.model";
import {IOrderStatus} from "./order-status.model";

export interface IOrderAdmin {
  orderId: number,
  userDto: IUser,
  orderItems: {product: IProduct, quantity: number}[],
  orderStatus: IOrderStatus
}
