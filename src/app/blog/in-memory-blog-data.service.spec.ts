import { TestBed } from '@angular/core/testing';

import { InMemoryBlogDataService } from './in-memory-blog-data.service';

describe('InMemoryBlogDataService', () => {
  let service: InMemoryBlogDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InMemoryBlogDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
