import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

import { Curso } from '../model/curso';
import { CoursesService } from '../services/courses.service';


@Injectable({
  providedIn: 'root'
})
export class CursoResolver implements Resolve<Curso> {

  constructor(private service: CoursesService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Curso> {
    if (route.params && route.params['id']) {
      return this.service.loadById(route.params['id']);
    }
    return of({ _id: '', name: '', category: '', lessons: [] });
  }
}
