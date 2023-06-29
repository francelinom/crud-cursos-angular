import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Curso } from '../model/curso';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private httpClient: HttpClient) { }

  listCursos(): Curso[] {
    return [
      {
        _id: '1',
        name: 'Angular',
        category: 'Front-end'
      },
      {
        _id: '2',
        name: 'Angular 16',
        category: 'Front-end'
      }
    ];
  }
}
