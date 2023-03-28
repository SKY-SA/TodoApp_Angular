import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, from, map, mergeMap, Observable, take, toArray } from 'rxjs';
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
  getTodoListIsCompleted() {
    return this.http
      .get<Todo[]>(`${this.BASE_URL}/Todos`)
      .pipe(mergeMap((x) => from(x)), filter(x=> x.isCompleted==true), toArray());
  }
  getById(id: number) {
    return this.http.get<Todo>(`${this.BASE_URL}/Todos/${id}`);
  }

  update(id: number, todoToUpdate: Todo) {
    return this.http
      .put(`${this.BASE_URL}/Todos/${id}`, todoToUpdate, {
        observe: 'response',
      })
      .pipe(map((response) => response.status == 204));
  }
  add(todo: Todo) {
    return this.http
      .post<Response>(`${this.BASE_URL}/Todos`, todo, { observe: 'response' })
      .pipe(map((response) => response.status == 201));
  }

  getComplete(id: number) {
    return this.http
      .put(
        `${this.BASE_URL}/Todos/IsCompleted/${id}`,
        {},
        { observe: 'response' }
      )
      .pipe(map((response) => response.status == 204));
  }

  delete(id: number) {
    return this.http
      .delete(`${this.BASE_URL}/Todos/${id}`, { observe: 'response' })
      .pipe(map((response) => response.status == 204));
  }
}
