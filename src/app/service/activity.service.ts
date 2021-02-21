import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import  { HttpClient }  from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  constructor(private http: HttpClient) { }

  addActivity(data: any, id: number): Observable<any> {
    return this.http.post<any>(`http://localhost:8080/api/addActivity/${id}`, data);
  }
  editActivity(data: any, id: number): Observable<any> {
    return this.http.put<any>(`http://localhost:8080/api/editActivity/${id}`, data);
  }
  findActivity(id: number): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/api/findActivity/${id}`);
  }
  deleteActivity(id: number): Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/api/deleteActivity/${id}`);
  }
  findActivitiesForSchool(id: number): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/api/findActivitiesForSchool/${id}`);
  }
}
