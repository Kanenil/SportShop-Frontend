import {Component, Input, OnInit} from '@angular/core';
import {ICategory} from "../../../../../models/category/category.model";
import {CategoryService} from "../../../../../services/category.service";

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html'
})
export class NavMenuComponent implements OnInit {

  private isOpen = false;
  private toggler: Element | null = null;
  private collapse: Element | null = null;

  @Input() isAdmin: boolean = false
  public categories: ICategory[] = []

  constructor(private categoryService: CategoryService) {}

  toggleMenu() {
    if(this.isOpen) {
      this.collapse?.classList.add('hidden');
      this.toggler?.classList.remove("navbarTogglerActive");
    } else {
      this.collapse?.classList.remove('hidden');
      this.toggler?.classList.add("navbarTogglerActive");
    }

    this.isOpen = !this.isOpen;
  }

  ngOnInit(): void {
    this.toggler = document.querySelector('#navbarToggler');
    this.collapse = document.querySelector('#navbarCollapse');
    this.categoryService.getAll().subscribe(resp=>{
      this.categories = resp
    })
  }

}
