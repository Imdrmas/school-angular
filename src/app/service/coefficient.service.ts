import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoefficientService {

  constructor(private http: HttpClient) { }

  addCoefficient(data: any, id: number): Observable<any> {
    return this.http.post<any>(`http://localhost:8080/api/addCoefficient/${id}`, data);
  }
  editCoefficient(data: any, id: number): Observable<any> {
    return this.http.put<any>(`http://localhost:8080/api/editCoefficient/${id}`, data);
  }
  findCoefficient(id: number): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/api/findCoefficient/${id}`);
  }
  deleteCoefficient(id: number): Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/api/deleteCoefficient/${id}`);
  }
}
