import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TodoService } from 'src/app/todo/services/todo.service';
import { Todo } from 'src/app/todo/todo.model';

@Component({
  selector: 'app-shipments-detail-page',
  templateUrl: './shipments-detail-page.component.html',
  styleUrls: ['./shipments-detail-page.component.scss']
})
export class ShipmentsDetailPageComponent implements OnInit {
  

  constructor() { }

  ngOnInit() {
  }
}