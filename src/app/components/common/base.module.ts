import { NgModule } from '@angular/core';
import {CommonModule, NgForOf} from '@angular/common';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import {RouterLink} from "@angular/router";
import { CarouselComponent } from './carousel/carousel.component';



@NgModule({
  declarations: [
    BreadcrumbComponent,
    CarouselComponent
  ],
    exports: [
        BreadcrumbComponent,
        CarouselComponent
    ],
  imports: [
    CommonModule,
    RouterLink,
    NgForOf
  ]
})
export class BaseModule { }
