import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Curso } from '../model/curso';
import { Observable, delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = 'api/cursos';

  constructor(private httpClient: HttpClient) { }

  listCursos() {
    return this.httpClient.get<Curso[]>(this.API)
      .pipe(
        first()
      );
  }

  save(curso: Curso) {
    return this.httpClient.post<Curso>(this.API, curso).pipe(first());
  }
}
