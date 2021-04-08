import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-shipments-form',
  templateUrl: './shipments-form.component.html',
  styleUrls: ['./shipments-form.component.scss']
})
export class ShipmentsFormComponent implements OnInit {
  shipmentsDetail: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.buildShipmentDetailForm();
  }
  
  buildShipmentDetailForm(){
    this.shipmentsDetail = this.fb.group({
      shipmentName:[''],
      invoiceNo:[''],
      orderNo:[''],
      trackingNo:['']
    });
  }

  saveShipments(shipments){
    this.shipmentsDetail.patchValue(shipments);
    console.log(this.shipmentsDetail.value)
  }

}
