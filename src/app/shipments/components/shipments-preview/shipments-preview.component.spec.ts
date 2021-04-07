import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentsPreviewComponent } from './shipments-preview.component';

describe('ShipmentsPreviewComponent', () => {
  let component: ShipmentsPreviewComponent;
  let fixture: ComponentFixture<ShipmentsPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipmentsPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentsPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
