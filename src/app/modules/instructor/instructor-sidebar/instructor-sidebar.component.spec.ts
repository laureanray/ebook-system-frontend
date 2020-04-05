import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorSidebarComponent } from './instructor-sidebar.component';

describe('InstructorSidebarComponent', () => {
  let component: InstructorSidebarComponent;
  let fixture: ComponentFixture<InstructorSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructorSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
