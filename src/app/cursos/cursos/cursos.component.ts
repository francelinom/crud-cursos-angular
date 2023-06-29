import { Component, OnInit } from '@angular/core';
import { Curso } from '../model/curso';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  cursos: Curso[] = [
    {
      _id: '1',
      name: 'Angular',
      category: 'Front-end'
    }
  ];
  displayedColumns = ['name', 'category'];

  constructor() {}

  ngOnInit(): void {

  }

}
