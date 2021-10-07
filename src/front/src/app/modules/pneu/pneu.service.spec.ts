import { TestBed } from '@angular/core/testing';

import { PneuService } from './pneu.service';

describe('PneuService', () => {
  let service: PneuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PneuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
