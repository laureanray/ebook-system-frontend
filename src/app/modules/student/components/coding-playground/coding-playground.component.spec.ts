import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodingPlaygroundComponent } from './coding-playground.component';

describe('CodingPlaygroundComponent', () => {
  let component: CodingPlaygroundComponent;
  let fixture: ComponentFixture<CodingPlaygroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodingPlaygroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodingPlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
