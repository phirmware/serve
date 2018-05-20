import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomobilesComponent } from './automobiles.component';

describe('AutomobilesComponent', () => {
  let component: AutomobilesComponent;
  let fixture: ComponentFixture<AutomobilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutomobilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomobilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
