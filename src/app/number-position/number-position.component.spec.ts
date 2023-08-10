import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberPositionComponent } from './number-position.component';

describe('NumberPositionComponent', () => {
  let component: NumberPositionComponent;
  let fixture: ComponentFixture<NumberPositionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NumberPositionComponent]
    });
    fixture = TestBed.createComponent(NumberPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
