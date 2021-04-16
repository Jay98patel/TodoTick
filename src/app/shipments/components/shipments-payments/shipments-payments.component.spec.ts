import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentsPaymentsComponent } from './shipments-payments.component';

describe('ShipmentsPaymentsComponent', () => {
  let component: ShipmentsPaymentsComponent;
  let fixture: ComponentFixture<ShipmentsPaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipmentsPaymentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentsPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
