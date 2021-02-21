import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {
  constructor(private http: HttpClient) { }

  addProgram(data: any, id: number): Observable<any> {
    return this.http.post<any>(`http://localhost:8080/api/addProgram/${id}`, data);
  }
  editProgram(data: any, id: number): Observable<any> {
    return this.http.put<any>(`http://localhost:8080/api/editProgram/${id}`, data);
  }
  findProgram(id: number): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/api/findProgram/${id}`);
  }
  deleteProgram(id: number): Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/api/deleteProgram/${id}`);
  }
}
