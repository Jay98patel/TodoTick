import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { keyValuePair } from 'src/app/shared/masterData/masterData';

@Component({
  selector: 'app-shipments-detail',
  templateUrl: './shipments-detail.component.html',
  styleUrls: ['./shipments-detail.component.scss']
})
export class ShipmentsDetailComponent implements OnInit {
  inStock: keyValuePair[] = [
    { id: 1, name: "In Stock" },
    { id: 2, name: "Out of Stock" },
  ];

  trackingno: string;
  @Input() shipDetail: FormGroup;

  constructor() { }

  ngOnInit() {
    console.log(this.shipDetail.controls.invoiceNo)
  }

  shipmentControl() {
    return this.shipDetail.controls;
  }
}
