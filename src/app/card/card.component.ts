import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Output() visibleChange = new EventEmitter<boolean>();
  @Input() visible: boolean = true;

  constructor() { }

  ngOnInit() {
  }

 /* toggle() {
    this.visible = !this.visible;
  }*/

}
