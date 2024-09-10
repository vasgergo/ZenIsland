import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDate',
})
export class CustomDatePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    const date = new Date(value);
    const year = date.getFullYear();
    let month = (date.getMonth() + 1).toString();
    let day = date.getDate().toString();

    month = month.length < 2 ? '0' + month : month;
    day = day.length < 2 ? '0' + day : day;

    return `${year}-${month}-${day}`;
  }
}
