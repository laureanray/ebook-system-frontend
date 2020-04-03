import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedBookAddExamComponent } from './selected-book-add-exam.component';

describe('SelectedBookAddExamComponent', () => {
  let component: SelectedBookAddExamComponent;
  let fixture: ComponentFixture<SelectedBookAddExamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedBookAddExamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedBookAddExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
