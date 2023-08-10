import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitDuplicationCheckerComponent } from './digit-duplication-checker.component';

describe('DigitDuplicationCheckerComponent', () => {
  let component: DigitDuplicationCheckerComponent;
  let fixture: ComponentFixture<DigitDuplicationCheckerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DigitDuplicationCheckerComponent]
    });
    fixture = TestBed.createComponent(DigitDuplicationCheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
