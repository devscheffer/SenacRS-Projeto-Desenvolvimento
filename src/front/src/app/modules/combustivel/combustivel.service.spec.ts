import { TestBed } from '@angular/core/testing';

import { CombustivelService } from './combustivel.service';

describe('CombustivelService', () => {
  let service: CombustivelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CombustivelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
