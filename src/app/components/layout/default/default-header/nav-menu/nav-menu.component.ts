import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html'
})
export class NavMenuComponent implements OnInit {

  private isOpen = false;
  private toggler: Element | null = null;
  private collapse: Element | null = null;

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
  }

}
