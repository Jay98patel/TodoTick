import { Injectable } from '@angular/core';
import { CustomerOrders } from '../customers-order.model';
import { CustomersOrder } from '../masterData/usersOrders';

@Injectable()
export class CustomersOrdersService {

  constructor(public customerDetail:CustomersOrder) { }

  getOrders():CustomerOrders[]{
    return this.customerDetail.customerOrderDetails;
  }
}
