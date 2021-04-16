import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Todo } from '../todo.model';

@Injectable()
export class TodoService {
  private baseURL: string;
  private editTodo:object={};
  updateTodo=new BehaviorSubject<object>(this.editTodo);
  currentTodo=this.updateTodo.asObservable();

  constructor(private http: HttpClient) {
    this.baseURL = environment.apiUrl;
  }

  getAllTodoList(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.baseURL}/todo`);
  }

  getShipmentsDetails(id):Observable<Todo>{
    return this.http.get<Todo>(`${this.baseURL}/todo/${id}`);
  }

  updateTodoView(newTodo:Todo){
    this.updateTodo.next(newTodo)
  }

  createTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(`${this.baseURL}/todo`,todo);
  }

  updateTodoList(todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(`${this.baseURL}/todo/${todo.id}`, todo);
  }

  deleteTodoItem(id: Number): Observable<Todo> {
    return this.http.delete<Todo>(`${this.baseURL}/todo/${id}`);
  }

}
