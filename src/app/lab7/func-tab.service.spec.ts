import { TestBed } from '@angular/core/testing';

import { FuncTabService } from './func-tab.service';

describe('FuncTabService', () => {
  let service: FuncTabService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FuncTabService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
