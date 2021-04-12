import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BehaviourSubjectService } from '../Services/behaviour-subject.service';
import { TodoService } from './services/todo.service';
import { Todo } from './todo.model';

/**
 * puting two component's selector in this component  
 * fetch data from service and get into variable
 */

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],

})
export class TodoComponent implements OnInit , OnDestroy{
  todoLists: Todo[];
  editTodo: Todo;
  allowUser: Boolean = false;
  
  constructor(private todoService: TodoService, private route: ActivatedRoute,private behaviorService:BehaviourSubjectService) { }

  ngOnInit() {
    this.behaviorService.exclusiveApp.next(true);
    this.route.queryParams.subscribe((role: Params) => {
      if(role.allowAccess=="1"){
        this.allowUser=true;
      }
      else{
        this.allowUser=false;
      }
      // this.allowUser = role['admin'] === 1 ? true : false;
    })
    this.getAllTodoList();
  }

  getAllTodoList() {
    this.todoService.getAllTodoList().subscribe((responseTodoList:Todo[]) => {
      this.todoLists = responseTodoList;
    });
  }

  updateTodo(editTodo:Todo) {
    this.editTodo = editTodo;
  }

  ngOnDestroy(){
    this.behaviorService.exclusiveApp.next(false);
  }
}