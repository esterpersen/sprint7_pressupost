import { TestBed } from '@angular/core/testing';

import { PanellService } from './panell.service';

describe('Panell.ServiceService', () => {
  let service: PanellService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PanellService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
