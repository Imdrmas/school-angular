import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  constructor(private http: HttpClient) { }

  addCourse(data: any, idLevel: number, idSubject: number): Observable<any> {
    return this.http.post<any>(`http://localhost:8080/api/addCourse/${idLevel}/${idSubject}`, data);
  }
  editCourse(data: any, idCourse: number, idSubject: number): Observable<any> {
    return this.http.put<any>(`http://localhost:8080/api/editCourse/${idCourse}/${idSubject}`, data);
  }
  findCourse(id: number): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/api/findCourse/${id}`);
  }
  deleteCourse(idCourse: number, idSubject: number): Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/api/deleteCourse/${idCourse}/${idSubject}`);
  }
}
