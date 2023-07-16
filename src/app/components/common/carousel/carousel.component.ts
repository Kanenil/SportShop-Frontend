import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html'
})
export class CarouselComponent {

  @Input() images!: string[];

  public currentIndex: number = 0;
  public left: number = 0;
  public right: number = 6;


  slideToIndex(index: number) {
    this.currentIndex = index;
  }

  moveMapTo(offset: number) {
    this.left += offset;
    this.right += offset;
  }

}
