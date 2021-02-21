import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  constructor(private http: HttpClient) { }

  addExam(data: any, idSchool: number, idSubject: number): Observable<any> {
    return this.http.post<any>(`http://localhost:8080/api/addExam/${idSchool}/${idSubject}`, data);
  }
  editExam(data: any, id: number): Observable<any> {
    return this.http.put<any>(`http://localhost:8080/api/editExam/${id}`, data);
  }
  findExam(id: number): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/api/findExam/${id}`);
  }
  deleteExam(id: number, idSubject: number): Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/api/deleteExam/${id}/${idSubject}`);
  }
  findExamsForSchool(id: number): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/api/findExamsForSchool/${id}`);
  }
}
