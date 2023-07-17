import {Component, HostListener, OnInit} from '@angular/core';
import {CartService} from "../../../../services/cart.service";

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html'
})
export class DefaultHeaderComponent implements OnInit {

  private header: HTMLElement | null = null;

  constructor(
    public cartService: CartService
  ) {}

  ngOnInit(): void {
    this.header = document.querySelector('header');
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // @ts-ignore
    if (window.pageYOffset > this.header?.offsetTop) {
      this.header?.classList.add("sticky");
    } else {
      this.header?.classList.remove("sticky");
    }
  }

}
