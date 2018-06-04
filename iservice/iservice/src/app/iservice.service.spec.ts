import { TestBed, inject } from '@angular/core/testing';

import { IserviceService } from './iservice.service';

describe('IserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IserviceService]
    });
  });

  it('should be created', inject([IserviceService], (service: IserviceService) => {
    expect(service).toBeTruthy();
  }));
});
