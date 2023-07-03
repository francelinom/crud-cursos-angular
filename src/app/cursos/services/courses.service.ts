import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Curso } from '../model/curso';
import { Observable, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = '/assets/cursos.json';

  constructor(private httpClient: HttpClient) { }

  listCursos() {
    return this.httpClient.get<Curso[]>(this.API)
      .pipe(
        first()
      );
  }
}
