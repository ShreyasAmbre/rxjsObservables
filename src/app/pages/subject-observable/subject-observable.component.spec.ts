import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectObservableComponent } from './subject-observable.component';

describe('SubjectObservableComponent', () => {
  let component: SubjectObservableComponent;
  let fixture: ComponentFixture<SubjectObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectObservableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
