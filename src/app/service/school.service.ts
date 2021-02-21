import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  constructor(private http: HttpClient) { }

  addSchool(data: any): Observable<any> {
    return this.http.post<any>(`http://localhost:8080/api/addSchool`, data);
  }
  editSchool(data: any, id: number): Observable<any> {
    return this.http.put<any>(`http://localhost:8080/api/editSchool/${id}`, data);
  }
  findSchool(id: number): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/api/findSchool/${id}`);
  }
  deleteSchool(id: number): Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/api/deleteSchool/${id}`);
  }
  findSchools(): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:8080/api/findSchools`);
  }
}
