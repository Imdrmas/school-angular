import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  constructor(private http: HttpClient) { }

  addSubject(data: any, id: number): Observable<any> {
    return this.http.post<any>(`http://localhost:8080/api/addSubject/${id}`, data);
  }
  editSubject(data: any, id: number): Observable<any> {
    return this.http.put<any>(`http://localhost:8080/api/editSubject/${id}`, data);
  }
  findSubject(id: number): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/api/findSubject/${id}`);
  }
  findAllSubjectsForSchool(id: number): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/api/findAllSubjectsForSchool/${id}`);
  }
  deleteSubject(id: number): Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/api/deleteSubject/${id}`);
  }
  findSubjectForExam(id: number): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/api/findSubjectForExam/${id}`);
  }
  findSubjectForCourse(id: number): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/api/findSubjectForCourse/${id}`);
  }
  findSubjectsForSchool(id: number): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/api/findSubjectsForSchool/${id}`);
  }
}
