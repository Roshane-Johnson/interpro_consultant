import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
   name: 'sort',
})
export class SortPipe implements PipeTransform {
   transform(
      value: any[],
      sortBy: string,
      reverse: boolean,
      ...args: any[]
   ): any {
      return value.sort((a, b) =>
         a[sortBy] > b[sortBy] ? (reverse ? 1 : -1) : reverse ? -1 : 1
      );
   }
}
