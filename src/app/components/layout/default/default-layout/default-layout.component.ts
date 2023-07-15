import { Component } from '@angular/core';

@Component({
  selector: 'app-default-layout',
  template: `
    <div class="w-full">
      <app-default-header></app-default-header>
      <div class="min-h-screen flex flex-col">
        <div class="flex-grow">
          <router-outlet></router-outlet>
        </div>
        <app-default-footer></app-default-footer>
      </div>
    </div>
  `
})
export class DefaultLayoutComponent {

}
