import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {CartProduct, ICartProduct} from "../models/product/cart-product.model";
import {IProduct} from "../models/product/product.model";
import {StorageService} from "./storage.service";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

const CART = "CART";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private productItemList: ICartProduct[] = [];
  private productList = new BehaviorSubject<ICartProduct[]>([]);
  private totalPrice = new BehaviorSubject<number>(0);
  private totalItems = new BehaviorSubject<number>(0);

  constructor(
    private storageService: StorageService,
    private http: HttpClient
  ) {
    if (this.storageService.get("token")) {
      this.getCartFromServer().subscribe(resp => {
        console.log(resp)

        if (resp.length == 0) {
          this.productItemList = storageService.parseGet<ICartProduct[]>(CART) || [];
        }

        this.updateBehavior();
      })
    } else {
      this.productItemList = storageService.parseGet<ICartProduct[]>(CART) || [];
      this.updateBehavior();
    }
  }

  public addAllProductToServer() {
    if (this.storageService.get("token")) {
      for (let i = 0; i < this.productItemList.length; i++) {
        const product = this.productItemList[i]
        this.addToServer(product).subscribe(resp => {

          this.productItemList[i].idCartItem = resp.idCartItem
        })
      }
    }
  }

  private addToServer(product: ICartProduct) {
    return this.http.post<ICartProduct>(`${environment.apiUrl}/cart/addItem`, product)
  }

  private getCartFromServer() {
    return this.http.get<ICartProduct[]>(`${environment.apiUrl}/cart/`)
  }

  public addProductToCart(product: IProduct) {
    const productCart = new CartProduct(product, 1, 0);

    if (this.storageService.get("token")) {
      this.addToServer(productCart).subscribe(resp => {
        console.log("addToServer", resp)
        productCart.idCartItem = resp.idCartItem
        this.productItemList.push(productCart);
        this.updateBehavior();
      })
    } else {
      this.productItemList.push(productCart);
      this.updateBehavior();
    }

  }

  public removeProductFromCart(product: ICartProduct) {
    const index = this.productItemList.indexOf(product);
    this.productItemList.splice(index, 1);
    this.updateBehavior();
  }

  public changeQuantity(product: ICartProduct, offset: number) {
    const index = this.productItemList
      .findIndex(prod => prod.product.idProduct === product.product.idProduct);

    this.productItemList[index].quantity += offset;
    this.updateBehavior();
  }

  public isProductInCart(product: IProduct): boolean {
    return this.productItemList
      .find(prod=> prod.product.idProduct === product.idProduct) !== undefined;
  }

  public getProducts() {
    return this.productList.asObservable();
  }

  public isEmpty(): boolean {
    return this.productItemList.length === 0;
  }

  public getTotalPrice() {
    return this.totalPrice.asObservable();
  }

  public getTotalItems() {
    return this.totalItems.asObservable();
  }

  public getItemCount() {
    return this.productItemList.length;
  }

  private updateBehavior() {
    this.productList.next(this.productItemList);
    this.totalPrice.next(this.calculateTotalPrice());
    this.totalItems.next(this.calculateTotalItems());
    this.storageService.addToStorageAsStringify<ICartProduct[]>(CART, this.productItemList);
  }

  private calculateTotalPrice() {
    return this.productItemList.reduce(
      (cur, item) =>
        cur + (item.product.price * item.quantity), 0);
  }

  private calculateTotalItems() {
    return this.productItemList.reduce(
      (cur, item) =>
        cur + item.quantity, 0);
  }
}
