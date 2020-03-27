import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedBookSidebar } from './selected-book-sidebar.component';

describe('BookSidebarComponent', () => {
  let component: SelectedBookSidebar;
  let fixture: ComponentFixture<SelectedBookSidebar>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedBookSidebar ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedBookSidebar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
