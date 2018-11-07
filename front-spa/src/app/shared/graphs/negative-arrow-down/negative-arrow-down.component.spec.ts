import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NegativeArrowDownComponent } from './negative-arrow-down.component';

describe('NegativeArrowDownComponent', () => {
  let component: NegativeArrowDownComponent;
  let fixture: ComponentFixture<NegativeArrowDownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NegativeArrowDownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NegativeArrowDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
