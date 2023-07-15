import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { DefaultLayoutComponent } from './default/default-layout/default-layout.component';
import { DefaultHeaderComponent } from './default/default-header/default-header.component';
import { DefaultFooterComponent } from './default/default-footer/default-footer.component';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import { NavMenuComponent } from './default/default-header/nav-menu/nav-menu.component';



@NgModule({
  declarations: [
    AdminHeaderComponent,
    AdminLayoutComponent,
    DefaultLayoutComponent,
    DefaultHeaderComponent,
    DefaultFooterComponent,
    NavMenuComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    NgOptimizedImage,
    RouterLink,
    RouterLinkActive
  ]
})
export class LayoutModule { }
