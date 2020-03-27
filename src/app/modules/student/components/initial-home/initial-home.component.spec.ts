import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialHomeComponent } from './initial-home.component';

describe('InitialHomeComponent', () => {
  let component: InitialHomeComponent;
  let fixture: ComponentFixture<InitialHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitialHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitialHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
