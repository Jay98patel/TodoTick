import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoTickButtonComponent } from './todo-tick-button.component';



@NgModule({
  declarations: [TodoTickButtonComponent],
  imports: [
    CommonModule
  ],
  exports:[
    TodoTickButtonComponent
  ]
})
export class TodoTickButtonModule { }
