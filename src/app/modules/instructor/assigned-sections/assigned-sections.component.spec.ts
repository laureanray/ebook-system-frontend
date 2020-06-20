import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedSectionsComponent } from './assigned-sections.component';

describe('AssignedSectionsComponent', () => {
  let component: AssignedSectionsComponent;
  let fixture: ComponentFixture<AssignedSectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignedSectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignedSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
