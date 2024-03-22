import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosListComponent } from './cursos-list.component';

describe('CursosListComponent', () => {
  let component: CursosListComponent;
  let fixture: ComponentFixture<CursosListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [CursosListComponent]
});
    fixture = TestBed.createComponent(CursosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
