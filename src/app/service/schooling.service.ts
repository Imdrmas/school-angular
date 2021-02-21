import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SchoolingService {

  constructor(private http: HttpClient) { }

  addSchooling(data: any, id: number): Observable<any> {
    return this.http.post<any>(`http://localhost:8080/api/addSchooling/${id}`, data);
  }
  editSchooling(data: any, id: number): Observable<any> {
    return this.http.put<any>(`http://localhost:8080/api/editSchooling/${id}`, data);
  }
  findSchooling(id: number): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/api/findSchooling/${id}`);
  }
  deleteSchooling(id: number): Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/api/deleteSchooling/${id}`);
  }
  findSchoolingsForSchool(id: number): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/api/findSchoolingsForSchool/${id}`);
  }
}
