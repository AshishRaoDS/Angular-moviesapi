import { TestBed } from '@angular/core/testing';

import { ScaryService } from './scary.service';

describe('ScaryService', () => {
  let service: ScaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
