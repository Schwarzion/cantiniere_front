import { TestBed } from '@angular/core/testing';

import { ContrainstRestControllerService } from './contrainst-rest-controller.service';

describe('ContrainstRestControllerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContrainstRestControllerService = TestBed.get(ContrainstRestControllerService);
    expect(service).toBeTruthy();
  });
});
