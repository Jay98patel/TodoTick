import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BuyerDetails, SellerDetails,ShipmentDetails, Shipments  } from '../../shipment.model';
import { ShipmentsService } from '../../services/shipments.service'

@Component({
  selector: 'app-shipments-form',
  templateUrl: './shipments-form.component.html',
  styleUrls: ['./shipments-form.component.scss']
})
export class ShipmentsFormComponent implements OnInit {
  shipmentsDetail: FormGroup;
  buyerDetail: FormGroup;
  sellerDetail: FormGroup;
  shipments:Shipments;

  constructor(private fb: FormBuilder,private shipmentsService:ShipmentsService) { }

  ngOnInit() {
    this.buildShipmentDetailForm();
    this.buildBuyerDetailForm();
    this.buildSellerDetailForm();
  }

  buildShipmentDetailForm() {
    this.shipmentsDetail = this.fb.group({
      shipmentName: [''],
      invoiceNo: [''],
      orderNo: [''],
      trackingNo: ['']
    });
  }

  buildBuyerDetailForm() {
    this.buyerDetail = this.fb.group({
      buyersName: [''],
      buyersAddress: [''],
      buyersContact: [''],
      buyerCountry: ['']
    })
  }

  buildSellerDetailForm() {
    this.sellerDetail = this.fb.group({
      sellerName: [''],
      sellerAddress: [''],
      sellerContact: [''],
      sellerCountry: ['']
    })
  }

  saveShipments(shipments: ShipmentDetails) {
    this.shipmentsDetail.patchValue(shipments);
  }

  saveBuyer(buyers: BuyerDetails) {
    this.buyerDetail.patchValue(buyers);
  }

  saveSeller(seller: SellerDetails) {
    this.sellerDetail.patchValue(seller);
  }

  submitShipments() {
    this.shipments={...this.buyerDetail.value,...this.shipmentsDetail.value,...this.sellerDetail.value};
    this.shipmentsService.createShipments(this.shipments).subscribe((shipments)=>{
      console.log("data hase been saved")
      this.buyerDetail.reset();
      this.shipmentsDetail.reset();
      this.sellerDetail.reset();
    })
  }
}
