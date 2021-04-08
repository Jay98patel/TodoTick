import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-shipments-detail',
  templateUrl: './shipments-detail.component.html',
  styleUrls: ['./shipments-detail.component.scss']
})
export class ShipmentsDetailComponent implements OnInit {
  shipmentsDetail: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  

}
