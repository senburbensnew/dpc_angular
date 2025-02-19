import { TestBed } from '@angular/core/testing';

import { DPCService } from './dpc.service';

describe('SearchService', () => {
  let service: DPCService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DPCService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
