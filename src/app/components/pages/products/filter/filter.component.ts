import { Component } from '@angular/core';
import {CategoryService} from "../../../../services/category.service";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html'
})
export class FilterComponent {

  public sizes: string[] = ["XXS", "XS", "S", "M", "L", "XL", "2XL", "3XL"]

  constructor(
    public categoryService: CategoryService
  ) {}

}
