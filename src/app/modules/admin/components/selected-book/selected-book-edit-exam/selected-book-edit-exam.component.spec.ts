import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedBookEditExamComponent } from './selected-book-edit-exam.component';

describe('SelectedBookEditExamComponent', () => {
  let component: SelectedBookEditExamComponent;
  let fixture: ComponentFixture<SelectedBookEditExamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedBookEditExamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedBookEditExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
