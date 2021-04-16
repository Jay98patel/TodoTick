import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentProductListComponent } from './shipment-product-list.component';

describe('ShipmentProductListComponent', () => {
  let component: ShipmentProductListComponent;
  let fixture: ComponentFixture<ShipmentProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipmentProductListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
