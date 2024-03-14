import { Curso } from "./curso";

export interface CursosPage {
  cursos: Curso[];
  totalElements: number;
  totalPages: number;
}
