import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'concatNames'
})
export class ConcatNamesPipe implements PipeTransform {

  transform(value: any, lastName: any): unknown {
    return value + " " + lastName;
  }

}
