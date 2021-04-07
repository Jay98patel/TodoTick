import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentsInfoComponent } from './shipments-info.component';

describe('ShipmentsInfoComponent', () => {
  let component: ShipmentsInfoComponent;
  let fixture: ComponentFixture<ShipmentsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipmentsInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
