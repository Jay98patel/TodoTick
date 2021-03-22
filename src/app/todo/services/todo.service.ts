import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Todo } from '../todo.model';

@Injectable()
export class TodoService {
  private baseURL: string;

  constructor(private http: HttpClient) {
    this.baseURL = environment.apiUrl;
  }

  getAllTodoList(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.baseURL +`/`+'todo');
  }

  createTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.baseURL+`/`+'todo', todo);
  }

  updateTodoList(todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(this.baseURL +`/`+'todo'+ `/` + todo.id, todo);
  }

  deleteTodoItem(id: Number): Observable<Todo> {
    return this.http.delete<Todo>(this.baseURL+`/`+'todo' + `/` + id);
  }

}
