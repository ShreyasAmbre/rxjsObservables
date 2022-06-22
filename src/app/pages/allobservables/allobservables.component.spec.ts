import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllobservablesComponent } from './allobservables.component';

describe('AllobservablesComponent', () => {
  let component: AllobservablesComponent;
  let fixture: ComponentFixture<AllobservablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllobservablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllobservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
