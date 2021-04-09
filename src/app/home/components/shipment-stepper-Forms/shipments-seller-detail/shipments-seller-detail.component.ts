import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SellerDetails } from 'src/app/home/shipment.model';
import { keyValuePair, masterData } from 'src/app/shared/masterData/masterData';

@Component({
  selector: 'app-shipments-seller-detail',
  templateUrl: './shipments-seller-detail.component.html',
  styleUrls: ['./shipments-seller-detail.component.scss']
})
export class ShipmentsSellerDetailComponent implements OnInit {
  checkList:keyValuePair[];

  @Input() userDetail:FormGroup;

  constructor(public masterData: masterData) { }

  ngOnInit() {
    this.checkList=this.masterData.CheckList();
  }

  shipmentControl() {
    return this.userDetail.controls;
  }
}
