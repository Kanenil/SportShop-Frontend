import {IUser} from "../user/user.model";
import {IOrderStatus} from "./order-status.model";

export interface IOrder {
  idOrder: number,
  dateCreated: string,
  orderStatus: IOrderStatus,
  user: IUser
}
