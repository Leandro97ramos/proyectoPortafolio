import { TestBed } from '@angular/core/testing';

import { BlogPlantasService } from './blog-plantas.service';

describe('BlogPlantasService', () => {
  let service: BlogPlantasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogPlantasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
