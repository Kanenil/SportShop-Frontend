import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TruncatePipe} from "./truncate.pipe";
import { FormatImagePipe } from './format-image.pipe';



@NgModule({
  declarations: [TruncatePipe, FormatImagePipe],
  imports: [
    CommonModule
  ], exports: [
    TruncatePipe,
    FormatImagePipe
  ]
})
export class PipesModule { }
