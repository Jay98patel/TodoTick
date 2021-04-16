import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentsDetailPageComponent } from './shipments-detail-page.component';

describe('ShipmentsDetailPageComponent', () => {
  let component: ShipmentsDetailPageComponent;
  let fixture: ComponentFixture<ShipmentsDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipmentsDetailPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentsDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
