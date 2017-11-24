import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MyModulesModule } from './modules/my-modules.module';
import { routes } from './app.routes';
import { GenreEditFormComponent } from './genre-edit-form/genre-edit-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DataService, DataServiceBase, DataServiceMock } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
   // GenreEditFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {useHash:true}),
    MyModulesModule,

    
  ],
  providers: [ {provide: DataServiceBase, useClass: DataService }],
  bootstrap: [AppComponent]
})
export class AppModule { }

