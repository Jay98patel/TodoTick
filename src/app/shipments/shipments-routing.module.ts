import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShipmentsDetailPageComponent } from './components/shipments-detail-page/shipments-detail-page.component';
import { ShipmentsHistoryComponent } from './components/shipments-history/shipments-history.component';
import { ShipmentsInfoComponent } from './components/shipments-info/shipments-info.component';
import { ShipmentsPaymentsComponent } from './components/shipments-payments/shipments-payments.component';
import { ShipmentsPreviewComponent } from './components/shipments-preview/shipments-preview.component';
import { ShipmentsComponent } from './shipments.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'shipments', pathMatch: 'full'
  },
  {
    path: 'shipments',
    component: ShipmentsComponent
  },
  {
    path:'shipmentInfo',
    component:ShipmentsInfoComponent,
    children: [
      {
        path: '', redirectTo: 'shipmentsDetail', pathMatch: 'full'
      },
      {
        path: 'shipmentsDetail', component: ShipmentsDetailPageComponent
      },
      {
        path: 'preview', component: ShipmentsPreviewComponent
      },
      {
        path: 'payments', component: ShipmentsPaymentsComponent
      },
      {
        path: 'history', component: ShipmentsHistoryComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShipmentsRoutingModule { }
