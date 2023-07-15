import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductCardComponent} from "./product-card/product-card.component";
import {RouterLink} from "@angular/router";
import {PipesModule} from "../../pipes/pipes.module";



@NgModule({
  declarations: [ProductCardComponent],
  exports: [
    ProductCardComponent,

  ],
  imports: [
    CommonModule,
    RouterLink,
    PipesModule
  ]
})
export class ProductModule { }
