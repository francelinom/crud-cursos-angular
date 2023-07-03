import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

import { Curso } from '../model/curso';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  cursos$: Observable<Curso[]>;
  displayedColumns = ['name', 'category'];

  constructor(
    private cursosService: CoursesService,
    public dialog: MatDialog
  ) {
    this.cursos$ = this.cursosService.listCursos()
      .pipe(
        catchError(error => {
          this.onError('Erro ao carregar cursos.');
          return of([]);
        })
      );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void { }

}
