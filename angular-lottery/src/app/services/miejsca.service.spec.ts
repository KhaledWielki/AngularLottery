import { TestBed, inject } from '@angular/core/testing';

import { MiejscaService } from './miejsca.service';

describe('MiejscaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MiejscaService]
    });
  });

  it('should be created', inject([MiejscaService], (service: MiejscaService) => {
    expect(service).toBeTruthy();
  }));
});
