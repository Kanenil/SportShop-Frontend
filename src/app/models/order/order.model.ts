import {IUser} from "../user/user.model";

export interface IOrder {
  idOrder: number,
  dateCreated: string,
  orderStatus: { idOrderStatus:number, name: string },
  user: IUser
}
