import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveAccessModalComponent } from './remove-access-modal.component';

describe('RemoveAccessModalComponent', () => {
  let component: RemoveAccessModalComponent;
  let fixture: ComponentFixture<RemoveAccessModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveAccessModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveAccessModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
