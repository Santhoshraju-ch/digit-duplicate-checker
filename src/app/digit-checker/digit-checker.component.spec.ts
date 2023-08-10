import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitCheckerComponent } from './digit-checker.component';

describe('DigitCheckerComponent', () => {
  let component: DigitCheckerComponent;
  let fixture: ComponentFixture<DigitCheckerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DigitCheckerComponent]
    });
    fixture = TestBed.createComponent(DigitCheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
