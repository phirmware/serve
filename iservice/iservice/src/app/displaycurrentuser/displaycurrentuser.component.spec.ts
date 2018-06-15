import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaycurrentuserComponent } from './displaycurrentuser.component';

describe('DisplaycurrentuserComponent', () => {
  let component: DisplaycurrentuserComponent;
  let fixture: ComponentFixture<DisplaycurrentuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaycurrentuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaycurrentuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
