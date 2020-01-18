import { TestBed, async, inject } from '@angular/core/testing';

import { LunchLadyGuardGuard } from './lunch-lady-guard.guard';

describe('LunchLadyGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LunchLadyGuardGuard]
    });
  });

  it('should ...', inject([LunchLadyGuardGuard], (guard: LunchLadyGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
