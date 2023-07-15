import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-layout',
  template: `
    <app-admin-header></app-admin-header>
    <router-outlet></router-outlet>
  `
})
export class AdminLayoutComponent {

}
