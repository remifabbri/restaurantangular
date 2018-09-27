import { TestBed } from '@angular/core/testing';

import { MembersclanService } from './membersclan.service';

describe('MembersclanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MembersclanService = TestBed.get(MembersclanService);
    expect(service).toBeTruthy();
  });
});
