import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTopicModalComponent } from './add-topic-modal.component';

describe('AddTopicModalComponent', () => {
  let component: AddTopicModalComponent;
  let fixture: ComponentFixture<AddTopicModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTopicModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTopicModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
