import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {RouterLink} from "@angular/router";
import { ProductsComponent } from './products/products.component';
import {ProductModule} from "../product/product.module";
import {CategoryModule} from "../category/category.module";
import { MobileFilterComponent } from './products/mobile-filter/mobile-filter.component';
import {ClickedOutsideDirective} from "../../directives/clicked-outside.directive";
import { SingleProductComponent } from './single-product/single-product.component';
import {BaseModule} from "../common/base.module";
import { FilterComponent } from './products/filter/filter.component';
import { CartComponent } from './cart/cart.component';
import { SigninComponent } from './auth/signin/signin.component';
import { RegisterComponent } from './auth/register/register.component';
import {ReactiveFormsModule} from "@angular/forms";
import { OrderComponent } from './order/order.component';
import {PipesModule} from "../../pipes/pipes.module";
import { OrderHistoryComponent } from './order-history/order-history.component';
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
  declarations: [
    HomeComponent,
    ProductsComponent,
    MobileFilterComponent,
    ClickedOutsideDirective,
    SingleProductComponent,
    FilterComponent,
    CartComponent,
    SigninComponent,
    RegisterComponent,
    OrderComponent,
    OrderHistoryComponent,
    NotFoundComponent
  ],
    imports: [
        CommonModule,
        RouterLink,
        ProductModule,
        CategoryModule,
        BaseModule,
        ReactiveFormsModule,
        PipesModule
    ]
})
export class PagesModule { }
