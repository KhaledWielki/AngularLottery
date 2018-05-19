import { TestBed, inject } from '@angular/core/testing';

import { PowiadomienieService } from './powiadomienie.service';

describe('PowiadomienieService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PowiadomienieService]
    });
  });

  it('should be created', inject([PowiadomienieService], (service: PowiadomienieService) => {
    expect(service).toBeTruthy();
  }));
});
