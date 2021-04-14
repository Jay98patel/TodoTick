import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output  } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Todo } from '../todo.model';

/**
 * fetch todo list
 * action buttons like edit,delete
 */

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  @Input() task: Todo;
  newTask:object;
  isDetailShown = false;

  constructor(private todoService: TodoService) {}

  ngOnInit() {
   
  }

  updateTodo(todo:Todo) {
    console.log(todo);
    this.todoService.updateTodoView(todo);
  }

  deleteTodo(todo:Todo) {
    this.todoService.deleteTodoItem(todo.id).subscribe();
  }
}