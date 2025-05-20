import { TestBed } from '@angular/core/testing';

import { CartService } from '../shoppingCart/cart-service.service';

describe('CartServiceService', () => {
  let service: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
