import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DefaultLayoutComponent} from "./components/layout/default/default-layout/default-layout.component";
import {AdminLayoutComponent} from "./components/layout/admin/admin-layout/admin-layout.component";
import {HomeComponent} from "./components/pages/home/home.component";
import {ProductsComponent} from "./components/pages/products/products.component";

const routes: Routes = [

  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      { path: '', component: HomeComponent, pathMatch: 'full'},
      { path: 'products',
        children: [
          { path: '', component: ProductsComponent }
        ]
      },
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
