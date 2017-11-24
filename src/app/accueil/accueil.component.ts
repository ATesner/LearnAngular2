import { Component, OnInit, Injector } from '@angular/core';
import * as model from '../models';
import { CardComponent } from '../card/card.component';
import { DataService, DataServiceBase } from '../services/data.service';
import { Observable } from 'rxjs/Observable';
import { inject } from '@angular/core/testing';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  genres: Array<model.Genre>;
  genreAEditer: model.Genre;
  genresData: Observable<model.GenreData[]>;

  constructor(private dataService: DataServiceBase, injector: Injector) {

    this.dataService = injector.get(DataServiceBase);

    this.genres = [];
    this.genreAEditer = null;

    let g1 = new model.Genre('Fantastique', model.AgeMinimum.age10);
    this.genres.push(g1);

    let g2 = new model.Genre('Animation', model.AgeMinimum.age3);
    this.genres.push(g2);

    let g3 = new model.Genre('Science-fiction', model.AgeMinimum.age12);
    this.genres.push(g3);

    let g4 = new model.Genre('Action', model.AgeMinimum.age14);
    this.genres.push(g4);

    this.genres.push(null);
   }

  ngOnInit() {

    this.genresData = this.dataService.getGenre();
  }

  updateGenre(nouveauGenre: model.Genre){
    let index = this.genres.indexOf(this.genreAEditer);
    this.genres[index] = nouveauGenre;
  }

}
