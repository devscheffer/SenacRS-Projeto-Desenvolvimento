import { TestBed } from '@angular/core/testing';

import { QuilometragemService } from './quilometragem.service';

describe('QuilometragemService', () => {
  let service: QuilometragemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuilometragemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
