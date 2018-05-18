import { TestBed, inject } from '@angular/core/testing';

import { LoteriaService } from './loteria.service';

describe('LoteriaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoteriaService]
    });
  });

  it('should be created', inject([LoteriaService], (service: LoteriaService) => {
    expect(service).toBeTruthy();
  }));
});
