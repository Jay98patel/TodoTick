import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CustomerOrders } from '../../customers-order.model';
import { CustomersOrder } from '../../masterData/usersOrders';
import { CustomersOrdersService } from '../../services/customers-orders.service';

@Component({
  selector: 'app-unconfirmed-order',
  templateUrl: './unconfirmed-order.component.html',
  styleUrls: ['./unconfirmed-order.component.scss']
})
export class UnconfirmedOrderComponent implements OnInit {

  @Output() unconfirmedOrder= new EventEmitter<CustomerOrders>(); 

  customersOrders:CustomerOrders[];

  constructor(private customerOrderService:CustomersOrdersService) { }

  ngOnInit(): void {
    this.getCustomersOrders();
  }

  getCustomersOrders(){
    this.customersOrders=this.customerOrderService.getOrders();
  }

  confirmOrder(order:CustomerOrders,index:number){
    this.unconfirmedOrder.emit(order);
    this.customersOrders.splice(index,1);
  }
}
