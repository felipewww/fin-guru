import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormConstantFixedAmountComponent } from './form-constant-fixed-amount.component';

describe('FormConstantFixedAmountComponent', () => {
  let component: FormConstantFixedAmountComponent;
  let fixture: ComponentFixture<FormConstantFixedAmountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormConstantFixedAmountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormConstantFixedAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
