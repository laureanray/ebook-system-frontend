import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamItemEditorComponent } from './exam-item-editor.component';

describe('ExamItemEditorComponent', () => {
  let component: ExamItemEditorComponent;
  let fixture: ComponentFixture<ExamItemEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamItemEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamItemEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
