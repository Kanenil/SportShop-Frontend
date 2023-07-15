import {Component, Input} from '@angular/core';
import {ICategory} from "../../../models/category/category.model";

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html'
})
export class CategoryCardComponent {

  @Input() category!: ICategory;
  @Input() image!: string;

}
