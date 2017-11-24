import { AgeMinimum } from './age-minimum.enum';

export class Genre {

    libelle: string; 
    private _ageMinimum: AgeMinimum; //age minimum requis

    constructor(libelle:string, ageMinimum: AgeMinimum);
    constructor(o: { libelle:string, ageMinimum:AgeMinimum});
    constructor(o: { libelle:string, ageMinimum:AgeMinimum}|string, _ageMinimum?:AgeMinimum){
        if(typeof o === "string") {
            this.libelle = o;
            this._ageMinimum = _ageMinimum || AgeMinimum.age18;
        }else {
            this.libelle = o.libelle;
            this._ageMinimum = o.ageMinimum;
        }

    }

    get ageMinimum(): AgeMinimum {
        return this._ageMinimum;
    }

    set ageMinimum(v: AgeMinimum) {
        this._ageMinimum = v;
    }

   /* estAdaptePour(dateNaissance: Date): boolean {

        let ms1 = dateNaissance.getTime();
        let ms2 = Date.now();
        let diff = ms2-ms1;

        return diff/1000/3600/24 > this._ageMinimum;
    }*/
}