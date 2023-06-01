import { TestBed } from '@angular/core/testing';

import { CalcRecService } from './calc-rec.service';

describe('CalcRecService', () => {
  let service: CalcRecService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalcRecService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
