import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebounceDistinctUntilChangeObservableComponent } from './debounce-distinct-until-change-observable.component';

describe('DebounceDistinctUntilChangeObservableComponent', () => {
  let component: DebounceDistinctUntilChangeObservableComponent;
  let fixture: ComponentFixture<DebounceDistinctUntilChangeObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebounceDistinctUntilChangeObservableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DebounceDistinctUntilChangeObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
