import { TestBed } from '@angular/core/testing';

import { BookEditorService } from './book-editor.service';

describe('BookEditorService', () => {
  let service: BookEditorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookEditorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
