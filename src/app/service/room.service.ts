import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  constructor(private http: HttpClient) { }

  addRoom(data: any, id: number): Observable<any> {
    return this.http.post<any>(`http://localhost:8080/api/addRoom/${id}`, data);
  }
  editRoom(data: any, id: number): Observable<any> {
    return this.http.put<any>(`http://localhost:8080/api/editRoom/${id}`, data);
  }
  findRoom(id: number): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/api/findRoom/${id}`);
  }
  deleteRoom(id: number): Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/api/deleteRoom/${id}`);
  }
  findRoomsForSchool(id: number): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/api/findRoomsForSchool/${id}`);
  }
}
