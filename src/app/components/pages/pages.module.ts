import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {RouterLink} from "@angular/router";
import { ProductsComponent } from './products/products.component';
import {ProductModule} from "../product/product.module";
import {CategoryModule} from "../category/category.module";
import { MobileFilterComponent } from './products/mobile-filter/mobile-filter.component';
import {AppModule} from "../../app.module";
import {ClickedOutsideDirective} from "../../directives/clicked-outside.directive";



@NgModule({
  declarations: [
    HomeComponent,
    ProductsComponent,
    MobileFilterComponent,
    ClickedOutsideDirective
  ],
  imports: [
    CommonModule,
    RouterLink,
    ProductModule,
    CategoryModule
  ]
})
export class PagesModule { }
