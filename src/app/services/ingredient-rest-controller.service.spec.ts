import { TestBed } from '@angular/core/testing';

import { IngredientRestControllerService } from './ingredient-rest-controller.service';

describe('IngredientRestControllerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IngredientRestControllerService = TestBed.get(IngredientRestControllerService);
    expect(service).toBeTruthy();
  });
});
