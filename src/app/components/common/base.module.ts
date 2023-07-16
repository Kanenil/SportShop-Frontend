import { NgModule } from '@angular/core';
import {CommonModule, NgForOf} from '@angular/common';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [
    BreadcrumbComponent
  ],
  exports: [
    BreadcrumbComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    NgForOf
  ]
})
export class BaseModule { }
