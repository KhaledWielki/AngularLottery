import { TestBed, inject } from '@angular/core/testing';

import { WynikiLoteriiService } from './wyniki-loterii.service';

describe('WynikiLoteriiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WynikiLoteriiService]
    });
  });

  it('should be created', inject([WynikiLoteriiService], (service: WynikiLoteriiService) => {
    expect(service).toBeTruthy();
  }));
});
