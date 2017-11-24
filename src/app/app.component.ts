import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import * as model from './models';
import { CardComponent } from './card/card.component';
import { Navigation } from 'selenium-webdriver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  
  @HostListener('window:resize', ['$event']) onResize(event) {
    this.isLarge = window.innerWidth > 900
  }

  @ViewChild('maCarte') maCarte: CardComponent;

  isLarge: boolean;
  id: number = 4;

  constructor(private router: Router){}

  navigate(page:string){
    this.router.navigateByUrl(`/${page}`);
  }

  ngOnInit() {
    this.isLarge = window.innerWidth > 900

    this.router.events
    .filter((e) => e instanceof NavigationStart)
    .map((e) => e as NavigationStart)
    .subscribe((e) => {
      console.log('Navigation start vers',e.url)
    });
    /*setInterval( () => {
      this.maCarte.toggle()
    }, 1000);*/
  }

}
