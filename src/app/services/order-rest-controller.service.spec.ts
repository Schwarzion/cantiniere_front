import { TestBed } from '@angular/core/testing';

import { OrderRestControllerService } from './order-rest-controller.service';

describe('OrderRestControllerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrderRestControllerService = TestBed.get(OrderRestControllerService);
    expect(service).toBeTruthy();
  });
});
