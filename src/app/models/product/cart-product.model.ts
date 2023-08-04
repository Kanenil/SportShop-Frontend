import {IProduct} from "./product.model";

export interface ICartProduct {
  product: IProduct,
  quantity: number,
  idCartItem: number
}

export class CartProduct implements ICartProduct {

  constructor(
    public product: IProduct,
    public quantity: number,
    public idCartItem: number
  ) {}

}
