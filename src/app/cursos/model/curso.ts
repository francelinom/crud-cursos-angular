import { Lesson } from "./lesson";

export interface Curso {
  _id: string;
  name: string;
  category: string;
  lessons?: Lesson[];
}
