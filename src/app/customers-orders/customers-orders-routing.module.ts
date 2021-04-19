import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersOrdersComponent } from './customers-orders.component';

const routes: Routes = [
  {
    path:'',component:CustomersOrdersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersOrdersRoutingModule { }
