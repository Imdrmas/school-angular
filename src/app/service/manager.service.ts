import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  constructor(private http: HttpClient) { }

  addManager(data: any, id: number): Observable<any> {
    return this.http.post<any>(`http://localhost:8080/api/addManager/${id}`, data);
  }
  editManager(data: any, id: number): Observable<any> {
    return this.http.put<any>(`http://localhost:8080/api/editManager/${id}`, data);
  }
  findManager(id: number): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/api/findManager/${id}`);
  }
  deleteManager(id: number, idSchool: number): Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/api/deleteManager/${id}/${idSchool}`);
  }
  findManagerForSchool(id: number): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/api/findManagerForSchool/${id}`);
  }
}
