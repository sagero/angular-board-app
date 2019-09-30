import { Pipe, PipeTransform } from '@angular/core';
import Card from '../models/Card';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Card[], criterion:string): Card[] {
    return criterion ? value.filter((item)=>item.name.startsWith(criterion)) : value;
  }
}
