import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorAdminLoginComponent } from './instructor-admin-login.component';

describe('InstructorAdminLoginComponent', () => {
  let component: InstructorAdminLoginComponent;
  let fixture: ComponentFixture<InstructorAdminLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructorAdminLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorAdminLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
