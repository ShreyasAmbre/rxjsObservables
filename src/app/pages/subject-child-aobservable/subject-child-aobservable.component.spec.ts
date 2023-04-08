import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectChildAObservableComponent } from './subject-child-aobservable.component';

describe('SubjectChildAObservableComponent', () => {
  let component: SubjectChildAObservableComponent;
  let fixture: ComponentFixture<SubjectChildAObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectChildAObservableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectChildAObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
