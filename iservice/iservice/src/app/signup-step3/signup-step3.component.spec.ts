import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupStep3Component } from './signup-step3.component';

describe('SignupStep3Component', () => {
  let component: SignupStep3Component;
  let fixture: ComponentFixture<SignupStep3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupStep3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupStep3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
