import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentsSellerDetailComponent } from './shipments-seller-detail.component';

describe('ShipmentsSellerDetailComponent', () => {
  let component: ShipmentsSellerDetailComponent;
  let fixture: ComponentFixture<ShipmentsSellerDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipmentsSellerDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentsSellerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
