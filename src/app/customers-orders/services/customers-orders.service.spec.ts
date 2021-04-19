import { TestBed } from '@angular/core/testing';

import { CustomersOrdersService } from './customers-orders.service';

describe('CustomersOrdersService', () => {
  let service: CustomersOrdersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomersOrdersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
