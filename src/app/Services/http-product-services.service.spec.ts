import { TestBed } from '@angular/core/testing';

import { HttpProductServicesService } from './http-product-services.service';

describe('HttpProductServicesService', () => {
  let service: HttpProductServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpProductServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
