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
    RegisterComponent
  ],
    imports: [
        CommonModule,
        RouterLink,
        ProductModule,
        CategoryModule,
        BaseModule,
        ReactiveFormsModule
    ]
})
export class PagesModule { }
