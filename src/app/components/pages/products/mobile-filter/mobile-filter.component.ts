import {Component, ElementRef, OnInit} from '@angular/core';
import {CategoryService} from "../../../../services/category.service";

@Component({
  selector: 'app-mobile-filter',
  templateUrl: './mobile-filter.component.html'
})
export class MobileFilterComponent {

  public isOpen = false;

  constructor(
    public categoryService: CategoryService
  ) {}

  handleClick(el: Element) {

    console.log(el.closest("#filter-dialog"))

    if(el.closest("#filter-dialog") || this.isOpen) {
      this.toggleOpen();
    }

    // if(this.isOpen) {
    //   this.toggleOpen();
    // } else if(el.closest("#filter-dialog")) {
    //   //this.toggleOpen();
    // }
  }

  toggleOpen() {
    if(this.isOpen) {
      document.body.classList.remove("overflow-hidden");
    } else {
      document.body.classList.add("overflow-hidden");
    }

    this.isOpen = !this.isOpen;
  }

  protected readonly event = event;
}
