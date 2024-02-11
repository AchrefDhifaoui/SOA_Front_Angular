import { TestBed } from '@angular/core/testing';

import { ReglementserviceService } from './reglementservice.service';

describe('ReglementserviceService', () => {
  let service: ReglementserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReglementserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
