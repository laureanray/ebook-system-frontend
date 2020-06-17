import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedInstructorComponent } from './selected-instructor.component';

describe('SelectedInstructorComponent', () => {
  let component: SelectedInstructorComponent;
  let fixture: ComponentFixture<SelectedInstructorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedInstructorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedInstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
