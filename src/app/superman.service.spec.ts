import { TestBed } from '@angular/core/testing';

import { SupermanService } from './superman.service';

describe('SupermanService', () => {
  let service: SupermanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupermanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
