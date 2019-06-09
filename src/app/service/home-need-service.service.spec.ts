import { TestBed } from '@angular/core/testing';

import { HomeNeedServiceService } from './home-need-service.service';

describe('HomeNeedServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HomeNeedServiceService = TestBed.get(HomeNeedServiceService);
    expect(service).toBeTruthy();
  });
});
