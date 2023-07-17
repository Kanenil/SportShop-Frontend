import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductCardComponent} from "./product-card/product-card.component";
import {RouterLink} from "@angular/router";
import {PipesModule} from "../../pipes/pipes.module";
import { CartProductCardComponent } from './cart-product-card/cart-product-card.component';



@NgModule({
  declarations: [ProductCardComponent, CartProductCardComponent],
    exports: [
        ProductCardComponent,
        CartProductCardComponent,

    ],
  imports: [
    CommonModule,
    RouterLink,
    PipesModule
  ]
})
export class ProductModule { }
