import { Component, OnInit } from '@angular/core';
import { CustomerOrders } from '../../customers-order.model';
import { CustomersOrdersService } from '../../services/customers-orders.service';

@Component({
  selector: 'app-confirmed-order',
  templateUrl: './confirmed-order.component.html',
  styleUrls: ['./confirmed-order.component.scss']
})
export class ConfirmedOrderComponent implements OnInit {
  confirmOrders:CustomerOrders[];

  constructor(private customerOrderService:CustomersOrdersService) { }

  ngOnInit(): void {
  }

  getConfirmOrders(){
    this.confirmOrders=this.customerOrderService.getConfirmOrders();
  }
}
