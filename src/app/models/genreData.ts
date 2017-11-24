export class GenreData {

    id: number;
    libelle: string; 
    series: SeriesData; 

    constructor(obj?:any){
       
        this.id = obj.id || 0;
        this.libelle = obj.libelle || 'Libelle non défini';
        this.series = new SeriesData(obj.series) || new SeriesData();

    }

}

export class SeriesData {
    
    id: number;
    titre: string; 
    dateCreation: Date; 

    constructor(obj?:any){

        this.id = obj.id || 0;
        this.titre = obj.titre || 'Titre non défini';
        this.dateCreation = obj.dateCreation || Date.now();
    }

}