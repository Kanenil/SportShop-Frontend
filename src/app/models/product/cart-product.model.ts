import {IProduct} from "./product.model";

export interface ICartProduct {
  product: IProduct,
  quantity: number,
}

export class CartProduct implements ICartProduct {

  constructor(
    public product: IProduct,
    public quantity: number
  ) {}

}
