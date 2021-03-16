import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoService } from './services/todo.service';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TodoComponent, TodoListComponent, TodoFormComponent],
  imports: [
    CommonModule,
    TodoRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers:[TodoService]
})
export class TodoModule {}
