import { TestBed, inject } from '@angular/core/testing';

import { ZgloszeniaDoLoteriiService } from './zgloszenia-do-loterii.service';

describe('ZgloszeniaDoLoteriiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ZgloszeniaDoLoteriiService]
    });
  });

  it('should be created', inject([ZgloszeniaDoLoteriiService], (service: ZgloszeniaDoLoteriiService) => {
    expect(service).toBeTruthy();
  }));
});
