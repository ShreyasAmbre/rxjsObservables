import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TapObservableComponent } from './tap-observable.component';

describe('TapObservableComponent', () => {
  let component: TapObservableComponent;
  let fixture: ComponentFixture<TapObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TapObservableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TapObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
