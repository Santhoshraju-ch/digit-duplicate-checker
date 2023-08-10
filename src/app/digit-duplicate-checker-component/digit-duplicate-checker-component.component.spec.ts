import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitDuplicateCheckerComponentComponent } from './digit-duplicate-checker-component.component';

describe('DigitDuplicateCheckerComponentComponent', () => {
  let component: DigitDuplicateCheckerComponentComponent;
  let fixture: ComponentFixture<DigitDuplicateCheckerComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DigitDuplicateCheckerComponentComponent]
    });
    fixture = TestBed.createComponent(DigitDuplicateCheckerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
