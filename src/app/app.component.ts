import {Component, OnInit} from '@angular/core';
import {EventBusService} from "./shared/event-bus.service";
import {CartService} from "./services/cart.service";

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {

  constructor(
    private eventBusService: EventBusService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.eventBusService.on("authorize", ()=>{
      if (localStorage.getItem("token")) {
        this.cartService.addAllProductToServer()
      }
    })
  }

}
