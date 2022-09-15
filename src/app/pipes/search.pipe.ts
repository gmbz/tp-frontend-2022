import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(list: any[], text: string) {
    if (!text) {
      return list;
    }
    return list.filter(element => element.nombre.toLowerCase().includes(text.toLocaleLowerCase()));
  }

}
