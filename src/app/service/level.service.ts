import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Level } from '../modal/Modal';

@Injectable({
  providedIn: 'root'
})
export class LevelService {
  constructor(private http: HttpClient) { }

  addLevel(data: any, id: number): Observable<any> {
    return this.http.post<any>(`http://localhost:8080/api/addLevel/${id}`, data);
  }
  editLevel(data: any, id: number): Observable<any> {
    return this.http.put<any>(`http://localhost:8080/api/editLevel/${id}`, data);
  }
  findLevel(id: number): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/api/findLevel/${id}`);
  }
  deleteLevel(id: number): Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/api/deleteLevel/${id}`);
  }
  addLevelToRoom(idRoom: number, idLevel: number): Observable<any> {
    return this.http.post<any>(`http://localhost:8080/api/addLevelToRoom/${idRoom}/${idLevel}`, null);
  }
  findLevelForRoom(id: number): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/api/findLevelForRoom/${id}`);
  }
  findLevels(): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:8080/api/findLevels`);
  }
  deleteLevelFromRoom(idRoom: number, idLevel: number): Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/api/deleteLevelFromRoom/${idRoom}/${idLevel}`);
  }
}
