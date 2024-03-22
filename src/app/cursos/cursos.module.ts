import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';



import { CursoFormComponent } from './containers/curso-form/curso-form.component';
import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from './containers/cursos/cursos.component';
import { CursosListComponent } from './components/cursos-list/cursos-list.component';

@NgModule({
    imports: [
    CommonModule,
    CursosRoutingModule,
    ReactiveFormsModule,
    CursosComponent,
    CursoFormComponent,
    CursosListComponent
]
})
export class CursosModule { }
