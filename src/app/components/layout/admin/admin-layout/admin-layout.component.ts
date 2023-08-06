import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-layout',
  template: `
    <div class="grid grid-cols-5 lg:grid-cols-8 dark:bg-gray-800">
      <app-admin-header></app-admin-header>
      <div class="p-4 py-8 lg:col-span-7 col-span-4 min-h-screen flex">
        <router-outlet></router-outlet>
      </div>
    </div>
  `
})
export class AdminLayoutComponent {

}
