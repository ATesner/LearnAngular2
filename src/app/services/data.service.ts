import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import * as model from '../models';

export abstract class DataServiceBase {

  abstract updateGenre(genre: model.GenreData);
  abstract getGenre() : Observable<model.GenreData[]>;
  abstract getGenreById(id: number) : Observable<model.GenreData>;
}

@Injectable()
export class DataService extends DataServiceBase{

  constructor(private http: Http) {
    super();
  }

  updateGenre(genre: model.GenreData) {
    this.http.post('url', genre);
  }

  getGenre(): Observable<model.GenreData[]> {

    let headers = new Headers({
      token:"dfgsdfsf1sf4ss4q44q5qfgfd696defsf3_fgsdf4s5sq",
      accept: 'data/json'
    })

    return this.http.get('/assets/data.json', { headers: headers }).map(genres => {
      return genres.json() as model.GenreData[];
    })

  }

  getGenreById(id: number): Observable<model.GenreData> {
    return this.getGenre().map(genres => genres.find(genre => genre.id == id));
  }

}

@Injectable()
export class DataServiceMock extends DataServiceBase{

  constructor() {
    super();
  }

  updateGenre(genre: model.GenreData) {
    
  }

  getGenre(): Observable<model.GenreData[]> {

    return Observable.of([
      new model.GenreData({ 
        id: 1, 
        libelle : "TestGenre",
        series: new model.SeriesData({
          id:0, 
          titre: 'SerieTest', 
          dateCreation: Date.now()
        })
      })
    ]);

  }

  getGenreById(id: number): Observable<model.GenreData> {

    return Observable.of(new model.GenreData({ 
      id: 1, 
      libelle : "TestGenre",
      series: new model.SeriesData({
        id:0, 
        titre: 'SerieTest', 
        dateCreation: Date.now()
      })
    }));

  }
}