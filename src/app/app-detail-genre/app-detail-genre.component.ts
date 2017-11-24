import { Component, OnInit, Input } from '@angular/core';
import { Genre } from '../models/index';
import { AppHelperService } from '../services/app-helper.service';

@Component({
  selector: 'app-detail-genre',
  templateUrl: './app-detail-genre.component.html',
  styleUrls: ['./app-detail-genre.component.less']
})
export class AppDetailGenreComponent implements OnInit {

  @Input() genre: Genre;

  constructor(private appHelperService: AppHelperService) { }

  ngOnInit() {
  }

}
