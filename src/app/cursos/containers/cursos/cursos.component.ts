import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

import { Curso } from '../../model/curso';
import { CoursesService } from '../../services/courses.service';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';
import { CursosPage } from '../../model/curso-page';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  cursos$: Observable<CursosPage> | null = null;

  constructor(
    private cursosService: CoursesService,
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {
    this.refresh();
  }

  refresh() {
    this.cursos$ = this.cursosService.listCursos()
      .pipe(
        catchError(error => {
          this.onError('Erro ao carregar cursos.');
          return of({cursos: [], totalElements: 0, totalPages: 0});
        })
      );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void { }

  onAdd() {
    this.router.navigate(['novo'], { relativeTo: this.route });
  }

  onEdit(curso: Curso) {
    this.router.navigate(['edit', curso._id], { relativeTo: this.route });
  }

  onRemove(curso: Curso) {

    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: 'Tem certeza que deseja remover o item?',
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.cursosService.delete(curso._id).subscribe(() => {
          this.refresh();
          this.snackBar.open('Curso removido com sucesso!', 'X', {
            duration: 5000,
            verticalPosition: 'top',
            horizontalPosition: 'center'
          });
        }, error => this.onError('Erro ao tentar remover curso!'));
      }
    });
  }

}
