import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeObservableComponent } from './take-observable.component';

describe('TakeObservableComponent', () => {
  let component: TakeObservableComponent;
  let fixture: ComponentFixture<TakeObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakeObservableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
