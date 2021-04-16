import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentsBuyerDetailComponent } from './shipments-buyer-detail.component';

describe('ShipmentsBuyerDetailComponent', () => {
  let component: ShipmentsBuyerDetailComponent;
  let fixture: ComponentFixture<ShipmentsBuyerDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipmentsBuyerDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentsBuyerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
