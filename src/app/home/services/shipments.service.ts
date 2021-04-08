import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Shipments } from '../shipment.model';

@Injectable()
export class ShipmentsService {
  private baseURL: string;

  constructor(private http: HttpClient) {
    this.baseURL = environment.apiUrl;
   }

  createShipments(shipments: Shipments): Observable<Shipments> {
    return this.http.post<Shipments>(`${this.baseURL}/shipments`, shipments);
  }
}
