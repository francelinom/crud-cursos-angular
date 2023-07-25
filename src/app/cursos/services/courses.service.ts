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

  loadById(id: string) {
    return this.httpClient.get<Curso>(`${this.API}/${id}`);
  }

  save(curso: Partial<Curso>) {
    if (curso._id) {
      return this.update(curso);
    }
    return this.create(curso);
  }

  private create(curso: Partial<Curso>) {
    return this.httpClient.post<Curso>(this.API, curso).pipe(first());
  }

  private update(curso: Partial<Curso>) {
    return this.httpClient.put<Curso>(`${this.API}/${curso._id}`, curso).pipe(first());
  }
}
