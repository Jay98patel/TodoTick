import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShipmentDetails } from 'src/app/home/shipment.model';

@Component({
  selector: 'app-shipments-detail',
  templateUrl: './shipments-detail.component.html',
  styleUrls: ['./shipments-detail.component.scss']
})
export class ShipmentsDetailComponent implements OnInit {
  shipmentsDetail: FormGroup;
  @Input() shipDetail;

  @Output() saveShipmentDetail = new EventEmitter<ShipmentDetails>();
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
   this.shipmentsDetail= this.buildShipmentsForm();
  }

  buildShipmentsForm(){
    return this.fb.group({
      shipmentName:[''],
      invoiceNo:['',[Validators.maxLength(10)]],
      orderNo:['',[Validators.maxLength(12),Validators.minLength(12)]],
      trackingNo:['',[Validators.maxLength(6)]]
    })
  }

  submitShipments(){
    this.shipDetail=this.shipmentsDetail.value;
    this.saveShipmentDetail.emit(this.shipDetail)
  }



}
