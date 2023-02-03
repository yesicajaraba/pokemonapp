import { TestBed } from '@angular/core/testing';

import { PokemonsWSService } from './pokemon-ws.service';

describe('PokemonsWSService', () => {
  let service: PokemonsWSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonsWSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
