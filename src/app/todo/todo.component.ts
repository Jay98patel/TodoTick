import { Component, OnInit } from '@angular/core';
import { TodoService } from './services/todo.service';
import { Todo } from './todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todoLists: Todo[]

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.getAlTodoList();
  }

  getAlTodoList() {
    this.todoService.getAllTodoList().subscribe((resTodoList) => {
      this.todoLists = resTodoList
    });
  }

}
