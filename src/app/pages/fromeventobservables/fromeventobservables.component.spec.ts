import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromeventobservablesComponent } from './fromeventobservables.component';

describe('FromeventobservablesComponent', () => {
  let component: FromeventobservablesComponent;
  let fixture: ComponentFixture<FromeventobservablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FromeventobservablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FromeventobservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
