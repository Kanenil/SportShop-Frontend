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
import {IsSignedInGuard} from "./guards/is-signed-in.guard";
import {OrderComponent} from "./components/pages/order/order.component";
import {OrderHistoryComponent} from "./components/pages/order-history/order-history.component";
import {AuthGuard} from "./guards/auth.guard";
import {OrderGuard} from "./guards/order.guard";

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
      { path: 'order',
        canActivate: [AuthGuard],
        children: [
          { path: 'make', component: OrderComponent, canActivate: [OrderGuard] },
          { path: 'history', component: OrderHistoryComponent }
        ]
      },
      { path: 'signin', component: SigninComponent, canActivate: [IsSignedInGuard], },
      { path: 'signup', component: RegisterComponent, canActivate: [IsSignedInGuard], },
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
