import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  constructor(private http: HttpClient) { }

  addNote(data: any, id: number): Observable<any> {
    return this.http.post<any>(`http://localhost:8080/api/addNote/${id}`, data);
  }
  editNote(data: any, id: number): Observable<any> {
    return this.http.put<any>(`http://localhost:8080/api/editNote/${id}`, data);
  }
  findNote(id: number): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/api/findNote/${id}`);
  }
  deleteNote(id: number): Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/api/deleteNote/${id}`);
  }
}
