import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BuyerDetails } from 'src/app/home/shipment.model';

@Component({
  selector: 'app-shipments-buyer-detail',
  templateUrl: './shipments-buyer-detail.component.html',
  styleUrls: ['./shipments-buyer-detail.component.scss']
})

export class ShipmentsBuyerDetailComponent implements OnInit {

  buyersDetail: FormGroup;
  @Output() saveShipmentDetail = new EventEmitter<BuyerDetails>();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.buyersDetail = this.buildBuyersForm();
  }

  buildBuyersForm() {
    return this.fb.group({
      buyersName: [''],
      buyersAddress: [''],
      buyersContact: ['', [Validators.maxLength(10), Validators.minLength(10)]],
      buyerCountry: ['']
    })
  }

  submitBuyer() {
    this.saveShipmentDetail.emit(this.buyersDetail.value)
  }

}
