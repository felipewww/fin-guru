import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NegativeArrowUpComponent } from './negative-arrow-up.component';

describe('NegativeArrowUpComponent', () => {
  let component: NegativeArrowUpComponent;
  let fixture: ComponentFixture<NegativeArrowUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NegativeArrowUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NegativeArrowUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
