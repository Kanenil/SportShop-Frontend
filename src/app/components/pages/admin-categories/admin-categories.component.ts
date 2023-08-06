import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../../../services/category.service";
import {ICategory} from "../../../models/category/category.model";

@Component({
  selector: 'app-admin-categories',
  templateUrl: './admin-categories.component.html'
})
export class AdminCategoriesComponent implements OnInit {
  public categories: ICategory[] = []
  constructor(private categoryService: CategoryService) {}
  ngOnInit(): void {
    this.updateList()
  }

  onDelete(id: number) {
    this.categoryService.delete(id).subscribe(resp=>{
      this.updateList()
    }, error => {
      this.updateList()
    })
  }

  private updateList() {
    this.categoryService.getAll().subscribe(resp=>{
      this.categories = resp
    })
  }

}
