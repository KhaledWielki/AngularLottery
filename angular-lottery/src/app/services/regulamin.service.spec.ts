import { TestBed, inject } from '@angular/core/testing';

import { RegulaminService } from './regulamin.service';

describe('RegulaminService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegulaminService]
    });
  });

  it('should be created', inject([RegulaminService], (service: RegulaminService) => {
    expect(service).toBeTruthy();
  }));
});
