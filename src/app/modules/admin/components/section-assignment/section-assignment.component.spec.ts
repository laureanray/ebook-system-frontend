import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionAssignmentComponent } from './section-assignment.component';

describe('SectionAssignmentComponent', () => {
  let component: SectionAssignmentComponent;
  let fixture: ComponentFixture<SectionAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
