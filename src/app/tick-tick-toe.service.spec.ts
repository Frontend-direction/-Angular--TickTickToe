import { TestBed } from '@angular/core/testing';

import { TickTickToeService } from './tick-tick-toe.service';

describe('TickTickToeService', () => {
  let service: TickTickToeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TickTickToeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
