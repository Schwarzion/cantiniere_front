import { TestBed } from '@angular/core/testing';

import { MealRestControllerService } from './meal-rest-controller.service';

describe('MealRestControllerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MealRestControllerService = TestBed.get(MealRestControllerService);
    expect(service).toBeTruthy();
  });
});
