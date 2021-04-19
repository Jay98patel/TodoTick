import { Component, OnInit } from '@angular/core';
import { CustomerOrders } from '../../customers-order.model';
import { CustomersOrdersService } from '../../services/customers-orders.service';

@Component({
  selector: 'app-unconfirmed-order',
  templateUrl: './unconfirmed-order.component.html',
  styleUrls: ['./unconfirmed-order.component.scss']
})
export class UnconfirmedOrderComponent implements OnInit {
  customersOrders:CustomerOrders[];

  constructor(private customerOrderService:CustomersOrdersService) { }

  ngOnInit(): void {
    this.getCustomersOrders();
  }

  getCustomersOrders(){
    this.customersOrders=this.customerOrderService.getOrders();
  }

}
