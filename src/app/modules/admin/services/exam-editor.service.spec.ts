import { TestBed } from '@angular/core/testing';

import { ExamEditorService } from './exam-editor.service';

describe('ExamEditorService', () => {
  let service: ExamEditorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExamEditorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
