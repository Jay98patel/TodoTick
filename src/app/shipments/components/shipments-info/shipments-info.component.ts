import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TodoService } from 'src/app/todo/services/todo.service';
import { Todo } from 'src/app/todo/todo.model';

@Component({
  selector: 'app-shipments-info',
  templateUrl: './shipments-info.component.html',
  styleUrls: ['./shipments-info.component.scss']
})
export class ShipmentsInfoComponent implements OnInit {
  id: number;
  shipmentDetail: Todo;

  constructor(private router: ActivatedRoute, private shipmentsService: TodoService) { }

  ngOnInit() {
    this.getShipmentId();
  }

  getShipmentId() {
    this.router.queryParams.subscribe((role: Params) => {
      this.id = role.id;
      this.shipmentsService.getShipmentsDetails(this.id).subscribe((shipmentsDetails) => {
        this.shipmentDetail = shipmentsDetails;
      })
    });
  }


}
