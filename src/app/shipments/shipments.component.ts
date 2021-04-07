import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from '../todo/services/todo.service';
import { Todo } from '../todo/todo.model';

@Component({
  selector: 'app-shipments',
  templateUrl: './shipments.component.html',
  styleUrls: ['./shipments.component.scss']
})
export class ShipmentsComponent implements OnInit {
  todoList:Todo[]
  constructor(private shipService: TodoService,private router:Router) { }

  ngOnInit() {
    this.getTodos()
  }

  getTodos() {
    this.shipService.getAllTodoList().subscribe((todos) => {
      this.todoList= todos;
    })
  }

  loadShipmentsDetail(id:number){
    this.router.navigate(['shipments/shipmentInfo'])
    console.log(id)
  }
}
