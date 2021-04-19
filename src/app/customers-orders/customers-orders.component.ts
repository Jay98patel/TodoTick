import { Component, OnInit } from '@angular/core';
import { CustomerOrders } from './customers-order.model';
import {CustomersOrdersService} from './services/customers-orders.service'
@Component({
  selector: 'app-customers-orders',
  templateUrl: './customers-orders.component.html',
  styleUrls: ['./customers-orders.component.scss']
})
export class CustomersOrdersComponent implements OnInit {
  confirmOrders:CustomerOrders[];

  constructor(private customerOrderService:CustomersOrdersService) { }

  ngOnInit(): void {
    this.getConfirmOrders()
  }

  confirmOrder(order:CustomerOrders){
    this.customerOrderService.confirmOrder(order);
  }

  getConfirmOrders(){
    this.confirmOrders=this.customerOrderService.getConfirmOrders();
  }
}
