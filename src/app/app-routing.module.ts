import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DefaultLayoutComponent} from "./components/layout/default/default-layout/default-layout.component";
import {AdminLayoutComponent} from "./components/layout/admin/admin-layout/admin-layout.component";
import {HomeComponent} from "./components/pages/home/home.component";
import {ProductsComponent} from "./components/pages/products/products.component";
import {SingleProductComponent} from "./components/pages/single-product/single-product.component";
import {CartComponent} from "./components/pages/cart/cart.component";
import {SigninComponent} from "./components/pages/auth/signin/signin.component";
import {RegisterComponent} from "./components/pages/auth/register/register.component";

const routes: Routes = [

  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      { path: '', component: HomeComponent, pathMatch: 'full'},
      { path: 'products',
        children: [
          { path: '', component: ProductsComponent },
          { path: ':id', component: SingleProductComponent }
        ]
      },
      { path: 'cart', component: CartComponent },
      { path: 'signin', component: SigninComponent },
      { path: 'signup', component: RegisterComponent },
      //{ path: 'not-found', component: NotFoundComponent },
      { path: '**', redirectTo: 'not-found' }
    ]
  },

  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [

    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
