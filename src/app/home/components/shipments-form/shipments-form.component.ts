import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-shipments-form',
  templateUrl: './shipments-form.component.html',
  styleUrls: ['./shipments-form.component.scss']
})
export class ShipmentsFormComponent implements OnInit {
  shipmentsDetail: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

}
