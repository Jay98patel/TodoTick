import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BuyerDetails, SellerDetails, ShipmentDetails, Shipments } from '../../shipment.model';
import { ShipmentsService } from '../../services/shipments.service'
import { MatStepper } from '@angular/material/stepper';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-shipments-form',
  templateUrl: './shipments-form.component.html',
  styleUrls: ['./shipments-form.component.scss']
})
export class ShipmentsFormComponent implements OnInit {
  @ViewChild('stepper') stepper: MatStepper;
  id: number;
  shipmentsDetail: FormGroup;
  buyerDetail: FormGroup;
  sellerDetail: FormGroup;
  shipments: Shipments;
  loader: boolean = false;

  newShipmentForm: FormGroup = this.fb.group({
    step1: this.fb.group({
      shipmentName: ['', Validators.required],
      invoiceNo: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(7)]],
      orderNo: ['', [Validators.required, Validators.maxLength(6), Validators.minLength(4)]],
      trackingNo: ['', Validators.required],
      stock: ['', Validators.required]
    }),
    step2: this.fb.group({
      buyersName: ['', [Validators.required]],
      buyersAddress: ['', [Validators.required]],
      buyersContact: ['', [Validators.required, Validators.minLength(5)]],
      buyerCountry: ['', [Validators.required]],
      buyersProduct: ['', [Validators.required]],
      buyerActive: [false],
    }),
    step3: this.fb.group({
      sellerName: ['', [Validators.required]],
      sellerAddress: ['', [Validators.required]],
      sellerContact: ['', [Validators.required]],
      sellerCountry: ['', [Validators.required]],
      sellerDate: [''],
      sellerCheckList: ['']
    })
  });

  constructor(private fb: FormBuilder, private shipmentsService: ShipmentsService, private router: ActivatedRoute,private route:Router) { }

  ngOnInit() {
    console.log(this.router.snapshot.params)
    if (this.router.snapshot.params.id != undefined) {
      this.id = this.router.snapshot.params.id;
      this.shipmentsService.getShipment(this.id).subscribe((shipment: Shipments) => {
        console.log(shipment)
        this.newShipmentForm.patchValue(shipment)
      }, (err) => {
        console.log(err)
      })
    }
  }

  onChangeStep(e) {
    console.log(e)
  }

  submitShipments() {
    const loadShipmentList=this.route.navigate(['../shipmentList'])
    if (this.id == undefined) {
      this.loader = true;
      this.shipmentsService.createShipments(this.newShipmentForm.value).subscribe((shipments) => {
        this.loader = false;
        loadShipmentList;
      }, (err) => {
        this.loader = false;
      })
    }
    else {
      this.shipmentsService.updateShipmentList(this.newShipmentForm.value,this.id).subscribe((shipments: Shipments) => {
        this.loader = false;
        loadShipmentList;
      }, (err) => {
        this.loader = false;
      })
      console.log("data is updated")
    }
  }
}
