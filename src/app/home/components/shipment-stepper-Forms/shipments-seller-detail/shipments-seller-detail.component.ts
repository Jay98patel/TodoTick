import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SellerDetails } from 'src/app/home/shipment.model';

@Component({
  selector: 'app-shipments-seller-detail',
  templateUrl: './shipments-seller-detail.component.html',
  styleUrls: ['./shipments-seller-detail.component.scss']
})
export class ShipmentsSellerDetailComponent implements OnInit {
  sellerDetail: FormGroup;
  @Output() saveShipmentDetail = new EventEmitter<SellerDetails>();
  
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
   this.sellerDetail= this.buildShipmentsForm();
  }

  buildShipmentsForm(){
    return this.fb.group({
      sellerName:[''],
      sellerAddress:['',[Validators.maxLength(10)]],
      sellerContact:['',[Validators.maxLength(12),Validators.minLength(12)]],
      sellerCountry:['',[Validators.maxLength(6)]]
    })
  }

  submitSeller(){
    this.saveShipmentDetail.emit(this.sellerDetail.value)
  }

}
