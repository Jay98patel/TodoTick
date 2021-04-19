import { Component, Input, OnInit } from '@angular/core';
import { CustomersOrder } from '../../masterData/usersOrders';
import { CustomersOrdersService } from '../../services/customers-orders.service';

@Component({
  selector: 'app-confirmed-order',
  templateUrl: './confirmed-order.component.html',
  styleUrls: ['./confirmed-order.component.scss']
})
export class ConfirmedOrderComponent implements OnInit {
  @Input() confirmOrders:CustomersOrder[]

  constructor() { }

  ngOnInit(): void {
  }
}
