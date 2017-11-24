import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilComponent } from './accueil.component';
import { DataServiceBase, DataServiceMock, DataService } from '../services/data.service';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
//import { routes } from '../app.routes';
import { MyModulesModule } from '../modules/my-modules.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

describe('AccueilComponent', () => {
  let component: AccueilComponent;
  let fixture: ComponentFixture<AccueilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [  ],
      providers: [ { provide: DataServiceBase, useClass: DataService} ],
      imports: [
       // BrowserModule,
        RouterModule.forRoot([], {useHash:true}),
        MyModulesModule,
        //ReactiveFormsModule,
        //HttpModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('contains <li> with id an libelle', () => {
    expect(fixture.nativeElement.getElementsByTagName('h2')[1].innerText).toEqual('Liste des Genres du JSON');
  });
});
