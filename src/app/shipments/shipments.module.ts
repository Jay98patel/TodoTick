import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShipmentsRoutingModule } from './shipments-routing.module';
import { ShipmentsComponent } from './shipments.component';
import { ShipmentsDetailPageComponent } from './components/shipments-detail-page/shipments-detail-page.component';
import { ShipmentsPreviewComponent } from './components/shipments-preview/shipments-preview.component';
import { ShipmentsPaymentsComponent } from './components/shipments-payments/shipments-payments.component';
import { ShipmentsHistoryComponent } from './components/shipments-history/shipments-history.component';
import { ShipmentsInfoComponent } from './components/shipments-info/shipments-info.component';
import { ShipmentsService } from './services/shipments.service';
import { TodoService } from '../todo/services/todo.service';


@NgModule({
  declarations: [ShipmentsComponent, ShipmentsDetailPageComponent, ShipmentsPreviewComponent, ShipmentsPaymentsComponent, ShipmentsHistoryComponent, ShipmentsInfoComponent],
  imports: [
    CommonModule,
    ShipmentsRoutingModule
  ],
  providers: [
    ShipmentsService,
    TodoService
  ]
})
export class ShipmentsModule { }
