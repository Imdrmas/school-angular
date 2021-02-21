export interface PersistableElement {
  id: number;
  createdAt: any;
  description: string;
}
export interface Activity extends PersistableElement {
  type: string;
  day: string;
  endDate: string;
  startDate: string;
  date: string;
}
export interface Coefficient extends PersistableElement {
  grade: number;
}
export interface Exam extends PersistableElement {
  date: string;
  start: string;
  end: string;
}
export interface Manager extends PersistableElement {
  id: number;
  firstName: string;
  lastName: string;
}
export interface Subject extends PersistableElement {
  name: string;
  color: string;
  programs: Program[];
  coefficients: Coefficient[];
}
export interface Note extends PersistableElement {
  score: number;
}
export interface Program extends PersistableElement {
  name: string;
}
export interface Room extends PersistableElement {
  code: string;
  capacity: number;
  levels: Level[];
}
export interface School extends PersistableElement {
  name: string;
  city: string;
  department: string;
  open: string;
  close: string;
}
export interface Schooling extends PersistableElement {
  year: number;
}

export interface Level extends PersistableElement  {
  label: string;
  courses: Course[];
}

export interface Course extends PersistableElement {
  date: string;
  endDate: string;
  startDate: string;
}
