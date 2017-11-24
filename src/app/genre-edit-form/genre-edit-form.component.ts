import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GenreData } from '../models/index';
import { DataServiceBase } from '../services/data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-genre-edit-form',
  templateUrl: './genre-edit-form.component.html',
  styleUrls: ['./genre-edit-form.component.css']
})
export class GenreEditFormComponent implements OnInit {

  _genre: GenreData;
  formulaire: FormGroup;

  constructor(private activetedRoute: ActivatedRoute, private dataService: DataServiceBase) { }

  ngOnInit() {

    this.activetedRoute.params.subscribe( params => {

      let id = params['id'];
      this.dataService.getGenreById(id).subscribe( genre => {
        this.genre = genre;
      });

      this.formulaire = new FormGroup({
        libelle: new FormControl('', [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(45),
          Validators.pattern(/[A-Z][\w]+/)
        ])
      })

    })

  }

  set genre(v: GenreData) {
    this._genre = v;
    this.formulaire.setValue({ libelle: this._genre.libelle })
  }

  get genre() {
    return this._genre;
  }
}
