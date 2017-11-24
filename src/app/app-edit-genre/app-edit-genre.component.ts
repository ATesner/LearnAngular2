import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Genre, AgeMinimum } from '../models/index';
import { AppHelperService } from '../services/app-helper.service';

@Component({
  selector: 'app-edit-genre',
  templateUrl: './app-edit-genre.component.html',
  styleUrls: ['./app-edit-genre.component.css']
})
export class AppEditGenreComponent implements OnInit {

  genreEnCoursEdition: Genre;
  originalGenre: Genre;
  enCoursEdition: boolean = false;
  ageMinimumEnum;
  keysAge: string[];

  @Input() set genre(genreAEditer: Genre) {
    if(genreAEditer){

      this.originalGenre = genreAEditer;
      this.genreEnCoursEdition = new Genre(genreAEditer);
    }
  }

  @Output('nouveauGenre') outputGenre = new EventEmitter<Genre>();

  constructor(private appHelperService: AppHelperService) { }

  ngOnInit() { }

  editionEnCours(){

    if (this.originalGenre.libelle != this.genreEnCoursEdition.libelle
        || this.originalGenre.ageMinimum != this.genreEnCoursEdition.ageMinimum){
      this.enCoursEdition = true;
    }else {
      this.enCoursEdition = false;
    }
  }

  resetForm() {
    this.genreEnCoursEdition = new Genre(this.originalGenre);
    this.editionEnCours();
  }

  updateGenre(){
    this.originalGenre = this.genreEnCoursEdition;
    this.outputGenre.emit(this.genreEnCoursEdition);
    this.editionEnCours();
    this.genreEnCoursEdition = undefined;
  }
}
