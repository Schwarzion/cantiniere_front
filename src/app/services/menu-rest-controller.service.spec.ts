import { TestBed } from '@angular/core/testing';

import { MenuRestControllerService } from './menu-rest-controller.service';

describe('MenuRestControllerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MenuRestControllerService = TestBed.get(MenuRestControllerService);
    expect(service).toBeTruthy();
  });
});
