import { Component, OnInit } from '@angular/core';
import { TodoService } from './services/todo.service';
import { Todo } from './todo.model';

/**
 * puting two component's selector in this component  
 * fetch data from service and get into variable
 * 
 */

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],

})
export class TodoComponent implements OnInit {
  todoLists: Todo[];
  editTodo: Todo;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.getAllTodoList();
  }

  getAllTodoList() {
    this.todoService.getAllTodoList().subscribe((resTodoList) => {
      this.todoLists = resTodoList;
    });
  }

  updateTodo(editTodo) {
    this.editTodo = editTodo;
  }
}