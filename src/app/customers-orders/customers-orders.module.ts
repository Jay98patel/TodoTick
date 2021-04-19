import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersOrdersRoutingModule } from './customers-orders-routing.module';
import { UnconfirmedOrderComponent } from './components/unconfirmed-order/unconfirmed-order.component';
import { ConfirmedOrderComponent } from './components/confirmed-order/confirmed-order.component';
import { CustomersOrdersComponent } from './customers-orders.component';
import { CustomersOrdersService } from './services/customers-orders.service';
import { CustomersOrder } from './masterData/usersOrders';


@NgModule({
  declarations: [CustomersOrdersComponent,UnconfirmedOrderComponent, ConfirmedOrderComponent],
  imports: [
    CommonModule,
    CustomersOrdersRoutingModule
  ],
  providers:[CustomersOrdersService,CustomersOrder]
})
export class CustomersOrdersModule { }
