import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { ShipmentsFormComponent } from './components/shipments-form/shipments-form.component';
import { ShipmentsDetailComponent } from './components/shipment-stepper-Forms/shipments-detail/shipments-detail.component';
import { ShipmentsSellerDetailComponent } from './components/shipment-stepper-Forms/shipments-seller-detail/shipments-seller-detail.component';
import { ShipmentsBuyerDetailComponent } from './components/shipment-stepper-Forms/shipments-buyer-detail/shipments-buyer-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShipmentsService } from '../home/services/shipments.service';
import { masterData } from '../shared/masterData/masterData';
import { ShipmentProductListComponent } from './components/shipment-product-list/shipment-product-list.component';

@NgModule({
  declarations: [HomeComponent,
     ShipmentsFormComponent, 
     ShipmentsDetailComponent,
      ShipmentsSellerDetailComponent, ShipmentsBuyerDetailComponent, ShipmentProductListComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    AngularMaterialModule
  ],
  providers:[
    ShipmentsService,
    masterData
  ]
})
export class HomeModule { }
