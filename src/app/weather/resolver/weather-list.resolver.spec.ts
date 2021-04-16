import { TestBed } from '@angular/core/testing';

import { WeatherListResolver } from './weather-list.resolver';

describe('WeatherListResolver', () => {
  let resolver: WeatherListResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(WeatherListResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
