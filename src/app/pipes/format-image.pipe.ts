import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatImage'
})
export class FormatImagePipe implements PipeTransform {

  DEFAULT_IMAGES = [
    "https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/D33001s.jpg",
    "https://xcdn.next.co.uk/COMMON/Items/Default/Default/Publications/G27/shotview/460/755-078s.jpg",
    "https://xcdn.next.co.uk/COMMON/Items/Default/Default/ItemImages/AltItemShot/315x472/407223s2.jpg",
    "https://xcdn.next.co.uk/COMMON/Items/Default/Default/ItemImages/AltItemShot/315x472/519224s2.jpg"
  ]

  transform(value: number[] | undefined): string {
    if (!value) {
      return this.DEFAULT_IMAGES[Math.floor( Math.random() * (this.DEFAULT_IMAGES.length - 1))];
    }
    return 'data:image/jpeg;base64,' + value;
  }


}
