import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roleFormat'
})
export class RoleFormatPipe implements PipeTransform {

  transform(value: string | undefined): string {
    if (value) {
      return value.slice(5, value.length)
    }
    return '';
  }

}
