import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ajouteString',
  pure: true
})
export class AjouteStringPipe implements PipeTransform {

  transform(value: string, chaine: string, a: string): any {
    return value + chaine + a; 
  }

  
}
