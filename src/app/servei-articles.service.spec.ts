import { TestBed } from '@angular/core/testing';

import { ServeiArticlesService } from './servei-articles.service';

describe('ServeiArticlesService', () => {
  let service: ServeiArticlesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServeiArticlesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
