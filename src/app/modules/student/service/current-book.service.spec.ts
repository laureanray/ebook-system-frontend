import { TestBed } from '@angular/core/testing';

import { CurrentBookService } from './current-book.service';

describe('CurrentBookService', () => {
  let service: CurrentBookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentBookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
