import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CoursesService } from '../services/courses.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-curso-form',
  templateUrl: './curso-form.component.html',
  styleUrls: ['./curso-form.component.scss']
})
export class CursoFormComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private cursoService: CoursesService,
    private snackBar: MatSnackBar) {
    this.form = this.formBuilder.group({
      name: [null],
      category: [null]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.cursoService.save(this.form.value).subscribe(data => {
      console.log(data);
    }, error => this.onError());
  }

  onCancel() {

  }

  private onError() {
    this.snackBar.open('Erro ao Salvar Curso', '', { duration: 5000 });
  }

}
