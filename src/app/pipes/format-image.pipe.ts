import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatImage'
})
export class FormatImagePipe implements PipeTransform {

  transform(value: number[] | undefined): string {
    if (value != undefined) {
      return '';
    }
    return 'data:image/jpeg;base64,' + value;
  }


}
