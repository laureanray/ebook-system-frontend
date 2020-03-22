import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookItemCardComponent } from './book-item-card.component';

describe('BookItemCardComponent', () => {
  let component: BookItemCardComponent;
  let fixture: ComponentFixture<BookItemCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookItemCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
