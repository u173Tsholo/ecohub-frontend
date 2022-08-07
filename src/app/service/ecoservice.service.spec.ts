import { TestBed } from '@angular/core/testing';

import { EcoserviceService } from './ecoservice.service';

describe('EcoserviceService', () => {
  let service: EcoserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EcoserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
