import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryCardComponent } from './category-card/category-card.component';
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [
    CategoryCardComponent
  ],
  exports: [
    CategoryCardComponent
  ],
  imports: [
    CommonModule,
    RouterLink
  ]
})
export class CategoryModule { }
