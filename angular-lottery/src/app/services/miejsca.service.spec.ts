import { TestBed, inject } from '@angular/core/testing';

import { Services\miejscaService } from './services\miejsca.service';

describe('Services\miejscaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Services\miejscaService]
    });
  });

  it('should be created', inject([Services\miejscaService], (service: Services\miejscaService) => {
    expect(service).toBeTruthy();
  }));
});
