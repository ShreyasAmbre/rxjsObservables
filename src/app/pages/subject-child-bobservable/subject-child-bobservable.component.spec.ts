import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectChildBObservableComponent } from './subject-child-bobservable.component';

describe('SubjectChildBObservableComponent', () => {
  let component: SubjectChildBObservableComponent;
  let fixture: ComponentFixture<SubjectChildBObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectChildBObservableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectChildBObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
