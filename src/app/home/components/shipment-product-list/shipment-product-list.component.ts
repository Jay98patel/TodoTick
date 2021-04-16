import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ShipmentsService } from '../../services/shipments.service';
import { Shipments } from '../../shipment.model';

@Component({
  selector: 'app-shipment-product-list',
  templateUrl: './shipment-product-list.component.html',
  styleUrls: ['./shipment-product-list.component.scss']
})
export class ShipmentProductListComponent implements OnInit {

  displayedColumns = ['shipmentName', 'invoiceNo', 'buyersName', 'buyerCountry', 'sellerName', 'sellerContact'];
  dataSource: MatTableDataSource<Shipments>;

  constructor(private shipmientService: ShipmentsService,private route:Router) { }

  ngOnInit(): void {
    this.shipmientService.getAllShipmentList().subscribe((shipments) => {
      this.dataSource = new MatTableDataSource(shipments);
    },
      (err) => {
      })
  }

  // shipmentDetails(row){
  //   console.log(row);
  //   this.route.navigate(['../',row.id])

  // }

}
