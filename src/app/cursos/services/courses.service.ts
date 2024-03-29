import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Curso } from '../model/curso';
import { Observable, delay, first, tap } from 'rxjs';
import { CursosPage } from '../model/curso-page';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = 'api/cursos';

  constructor(private httpClient: HttpClient) { }

  listCursos(page = 0, size = 10) {
    return this.httpClient.get<CursosPage>(`${this.API}`, { params: { page, size } })
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

  delete(id: string) {
    return this.httpClient.delete<void>(`${this.API}/${id}`).pipe(first());
  }
}
