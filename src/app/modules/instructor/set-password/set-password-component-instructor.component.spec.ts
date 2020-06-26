import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetInstructorPasswordComponent } from './set-password-component-instructor.component';

describe('SetPasswordComponent', () => {
  let component: SetInstructorPasswordComponent;
  let fixture: ComponentFixture<SetInstructorPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetInstructorPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetInstructorPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
