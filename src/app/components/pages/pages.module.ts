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
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { OrderComponent } from './order/order.component';
import {PipesModule} from "../../pipes/pipes.module";
import { OrderHistoryComponent } from './order-history/order-history.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AdminCategoriesComponent } from './admin-categories/admin-categories.component';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';



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
    NotFoundComponent,
    AdminProductsComponent,
    AdminCategoriesComponent,
    CreateCategoryComponent,
    EditCategoryComponent,
    CreateProductComponent,
    EditProductComponent,
    AdminUsersComponent,
    AdminOrdersComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    ProductModule,
    CategoryModule,
    BaseModule,
    ReactiveFormsModule,
    PipesModule,
    FormsModule
  ]
})
export class PagesModule { }
