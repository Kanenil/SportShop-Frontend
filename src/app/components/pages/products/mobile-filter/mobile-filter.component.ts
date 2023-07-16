import {Component, ElementRef, OnInit} from '@angular/core';
import {CategoryService} from "../../../../services/category.service";

@Component({
  selector: 'app-mobile-filter',
  templateUrl: './mobile-filter.component.html'
})
export class MobileFilterComponent {

  public sizes: string[] = ["XXS", "XS", "S", "M", "L", "XL", "2XL", "3XL"]
  public isOpen = false;

  constructor(
    public categoryService: CategoryService
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
}
