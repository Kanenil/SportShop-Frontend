import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../../../../services/category.service";
import {ICategory} from "../../../../models/category/category.model";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html'
})
export class FilterComponent implements OnInit {

  public sizes: string[] = ["XXS", "XS", "S", "M", "L", "XL", "2XL", "3XL"]
  public categories!: ICategory[]

  constructor(
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.categoryService.getAll().subscribe(resp=>{
      this.categories = resp
    })
  }

}
