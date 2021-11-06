import { TestBed } from '@angular/core/testing';

import { RomanticService } from './romantic.service';

describe('RomanticService', () => {
  let service: RomanticService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RomanticService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
