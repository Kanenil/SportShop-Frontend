import {Component, Input} from '@angular/core';
import {IBreadcrumb} from "./breadcrumb.model";

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html'
})
export class BreadcrumbComponent {

  @Input() breadcrumbs!: IBreadcrumb[];

}
