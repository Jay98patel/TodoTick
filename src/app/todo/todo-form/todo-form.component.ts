import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TodoService } from '../services/todo.service';
import { Todo } from '../todo.model';

/**
 * create todo list 
 * edit todo list
 * validations
 */

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  newTodoForm: FormGroup;
  newTodo: Todo;
  todoFormData: Todo;
  newId: number;
  todoToEdit: Todo;
  updateTodo: Boolean = false

  @Input()
  set todoEdit(todoValue: Todo) {
    if (todoValue) {
      this.updateTodo = true;
      this.todoToEdit = { ...todoValue };
      this.newTodoForm.patchValue(todoValue);
    }
  }
  get todoForm(): Todo {
    return this.todoToEdit;
  }

  constructor(public fb: FormBuilder, public todoService: TodoService) {
  }

  ngOnInit() {
    this.newTodoForm = this.buildTodoForm();
  }

  buildTodoForm() {
    return this.fb.group({
      title: [''],
      taskDetail: [''],
    });
  }

  resetTodoForm() {    //no need
    setTimeout(() => {
      this.newTodoForm.reset();
    }, 1000);
  }

  submitTodo() {
    if (this.updateTodo === false) {
      this.todoService.createTodo(this.newTodoForm.value).subscribe((createdSuccessfully) => {
        this.resetTodoForm();
        console.log(createdSuccessfully)
      });
    }
    else {
      this.todoService.updateTodoList(this.newTodoForm.value).subscribe((updateTodo) => {
        this.resetTodoForm();
        this.updateTodo=false
        console.log(updateTodo)
      });
    }
  }
}
