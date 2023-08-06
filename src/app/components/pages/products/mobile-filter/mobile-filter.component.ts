import {Component, ElementRef, OnInit} from '@angular/core';
import {CategoryService} from "../../../../services/category.service";
import {ICategory} from "../../../../models/category/category.model";

@Component({
  selector: 'app-mobile-filter',
  templateUrl: './mobile-filter.component.html'
})
export class MobileFilterComponent implements OnInit {

  public sizes: string[] = ["XXS", "XS", "S", "M", "L", "XL", "2XL", "3XL"]
  public isOpen = false;
  public categories!: ICategory[]

  constructor(
    private categoryService: CategoryService
  ) {}

  handleClick(el: Element) {
    if(el.closest("#filter-dialog") || this.isOpen) {
      this.toggleOpen();
    }
  }

  toggleOpen() {
    if(this.isOpen) {
      document.body.classList.remove("overflow-hidden");
    } else {
      document.body.classList.add("overflow-hidden");
    }

    this.isOpen = !this.isOpen;
  }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe(resp=>{
      this.categories = resp
    })
  }
}
