import { TestBed } from '@angular/core/testing';

import { ActioapiService } from './actioapi.service';

describe('ActioapiService', () => {
  let service: ActioapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActioapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
