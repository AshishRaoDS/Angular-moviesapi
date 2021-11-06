import { TestBed } from '@angular/core/testing';

import { ThrillerService } from './thriller.service';

describe('ThrillerService', () => {
  let service: ThrillerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThrillerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
