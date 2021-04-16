import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BuyerDetails } from 'src/app/home/shipment.model';
import { keyValuePair, masterData } from 'src/app/shared/masterData/masterData';

@Component({
  selector: 'app-shipments-buyer-detail',
  templateUrl: './shipments-buyer-detail.component.html',
  styleUrls: ['./shipments-buyer-detail.component.scss']
})

export class ShipmentsBuyerDetailComponent implements OnInit {
  buyer:keyValuePair[];
  products:keyValuePair[];

  @Input() buyerDetail:FormGroup;

  constructor(public masterData: masterData) { }

  ngOnInit() {
    this.buyer=this.masterData.Buyers();
    this.products=this.masterData.Product();
  }

  buyerControl() {
    return this.buyerDetail.controls;
  }

}
