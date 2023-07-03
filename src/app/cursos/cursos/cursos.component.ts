import { Component, OnInit } from '@angular/core';
import { Curso } from '../model/curso';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  cursos: Curso[] = [];
  displayedColumns = ['name', 'category'];

  constructor(private cursosService: CoursesService) { }

  ngOnInit(): void {
    this.cursosService.listCursos().subscribe(res => {
      this.cursos = res;
    });
  }

}
