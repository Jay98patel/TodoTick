import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShipmentProductListComponent } from './components/shipment-product-list/shipment-product-list.component';
import { ShipmentsFormComponent } from './components/shipments-form/shipments-form.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, 
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'shipmentList', component: ShipmentProductListComponent
  },
  {
    path:'editShipment/:id',component:ShipmentsFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
