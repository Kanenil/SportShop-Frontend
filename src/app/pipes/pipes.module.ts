import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TruncatePipe} from "./truncate.pipe";
import { FormatImagePipe } from './format-image.pipe';
import { RoleFormatPipe } from './role-format.pipe';



@NgModule({
  declarations: [TruncatePipe, FormatImagePipe, RoleFormatPipe],
  imports: [
    CommonModule
  ], exports: [
        TruncatePipe,
        FormatImagePipe,
        RoleFormatPipe
    ]
})
export class PipesModule { }
