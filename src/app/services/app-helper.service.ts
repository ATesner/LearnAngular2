import { Injectable } from '@angular/core';
import { AgeMinimum } from '../models/index';

@Injectable()
export class AppHelperService {

  constructor() { }

  getStringAge(age: AgeMinimum) {
    return 'Interdit au moins de ' + age + ' ans'
  }

  getListeAge(): CleLibelle[] {
    let keys =  Object.keys(AgeMinimum);
    let tab = [];
    for(let i= keys.length/2; i< keys.length; i++){
      tab.push({cle: AgeMinimum[keys[i]], text: this.getStringAge(AgeMinimum[keys[i]]) });
    }
    return tab;
  }
}

export interface CleLibelle {
  cle:string,
  libelle: string
}
