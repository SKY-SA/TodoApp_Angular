import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Todo } from '../models/todo';
@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private BASE_URL = 'https://localhost:7001/api';
  constructor(private http: HttpClient) {}

  getAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.BASE_URL}/Todos`);
  }

  add(todo: Todo) {
    return this.http
      .post<Response>(`${this.BASE_URL}/Todos`, todo, { observe: 'response' })
      .pipe(map((response) => response.status==201));
  }

  getComplete(id:number){
    return this.http.put(`${this.BASE_URL}/Todos/IsCompleted/${id}`, {}, {observe:'response'}).pipe(map((response)=>response.status==204))
  }

  delete(id:number){
    return this.http.delete(`${this.BASE_URL}/Todos/${id}`, {observe:'response'}).pipe(map((response)=> response.status==204))
  }
}
