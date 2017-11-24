import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-test',
  templateUrl: './pipe-test.component.html',
  styleUrls: ['./pipe-test.component.css']
})
export class PipeTestComponent implements OnInit {

  dateNaissance: Date = new Date();
  prenom: string = "Jeanjean";
  valeur: number = 5.76;
  
  constructor() { }

  ngOnInit() {
  }

}
