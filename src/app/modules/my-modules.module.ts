import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AccueilComponent } from '../accueil/accueil.component';
import { AppDetailGenreComponent } from '../app-detail-genre/app-detail-genre.component';
import { AppEditGenreComponent } from '../app-edit-genre/app-edit-genre.component';
import { AppHelperService } from '../services/app-helper.service';
import { CardComponent } from '../card/card.component';
import { TemplateTestComponent } from '../template-test/template-test.component';
import { ElementBateauComponent } from '../element-bateau/element-bateau.component';
import { X2Directive } from '../directives/x2.directive';
import { PipeTestComponent } from '../pipe-test/pipe-test.component';
import { AjouteStringPipe } from '../pipes/ajoute-string.pipe';
import { routes } from '../app.routes';
import { GenreEditFormComponent } from '../genre-edit-form/genre-edit-form.component';
@NgModule({
  exports: [
    AccueilComponent,
    AppDetailGenreComponent,
    AppEditGenreComponent,
    CardComponent,
    TemplateTestComponent,
    ElementBateauComponent,
    X2Directive,
    PipeTestComponent,
    AjouteStringPipe ,
    GenreEditFormComponent
  ],
  declarations: [
    AccueilComponent,
     AppDetailGenreComponent,
     AppEditGenreComponent,
     CardComponent,
     TemplateTestComponent,
     ElementBateauComponent,
     X2Directive,
     PipeTestComponent,
     AjouteStringPipe,
     GenreEditFormComponent
   ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, {useHash:true}),
    HttpModule
  ],
  providers: [AppHelperService],
})
export class MyModulesModule { }
