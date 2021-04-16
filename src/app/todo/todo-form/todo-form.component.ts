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
  private todoToEdit: Todo;
  updateTodos: boolean = false
/*not in used
  @Input()
  set todoEdit(todoValue: Todo) {
    if (todoValue) {
      this.updateTodo = true;
      this.todoToEdit = { ...todoValue };
      this.newTodoForm.patchValue(todoValue);
    }
  }
  get todoEdit(): Todo {
    return this.todoToEdit;
  }
*/
  constructor(public fb: FormBuilder, public todoService: TodoService) {
  }

  ngOnInit() {
    this.newTodoForm = this.buildTodoForm();
    this.todoService.updateTodo.subscribe((res)=>{
      if(res){
        this.updateTodos = true;
        this.newTodoForm.patchValue(res);
      }
    })
  }

  buildTodoForm() {
    return this.fb.group({
      id:[''],
      title: [''],
      taskDetail: [''],
    });
  }

  submitTodo() {
    if (!this.updateTodos) {
      this.todoService.createTodo(this.newTodoForm.value).subscribe((createdSuccessfully) => {
        console.log("detailshas been saved with ",createdSuccessfully)
        this.todoService.getAllTodoList();
        this.newTodoForm.reset();
      });
    }
    else {
      this.todoService.updateTodoList(this.newTodoForm.value).subscribe((updateTodo) => {
        this.todoService.updateTodoView(updateTodo)
        this.todoService.getAllTodoList();
        this.updateTodos = false;
        this.newTodoForm.reset();
      });
    }
  }
}
