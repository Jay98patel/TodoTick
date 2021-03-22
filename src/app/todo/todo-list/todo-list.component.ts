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
  @Output() todoFormEdit = new EventEmitter<Todo>();
  @Input() task: Todo;
  isDetailShown = false;
  constructor(private todoService: TodoService,private cd: ChangeDetectorRef) {}

  ngOnInit() {
  }

  updateTodo(todo:Todo) {
    this.todoFormEdit.emit(todo);
    this.cd.detectChanges();
  }

  deleteTodo(todo:Todo) {
    this.todoService.deleteTodoItem(todo.id).subscribe();
  }
}