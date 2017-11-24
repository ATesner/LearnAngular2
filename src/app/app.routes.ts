import { Route, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { GenreEditFormComponent } from './genre-edit-form/genre-edit-form.component';
import { TemplateTestComponent } from './template-test/template-test.component';
import { ElementBateauComponent } from './element-bateau/element-bateau.component';
import { PipeTestComponent } from './pipe-test/pipe-test.component';


export const routes: Route[] = [
    { path: '', component: AccueilComponent},
    { path: 'pipe', component: PipeTestComponent},
    { path: 'directive', component: ElementBateauComponent},
    { path: 'template', component: TemplateTestComponent},
    { path: 'genre/:id', component: GenreEditFormComponent}
]