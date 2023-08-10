import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitInfoComponentComponent } from './digit-info-component.component';

describe('DigitInfoComponentComponent', () => {
  let component: DigitInfoComponentComponent;
  let fixture: ComponentFixture<DigitInfoComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DigitInfoComponentComponent]
    });
    fixture = TestBed.createComponent(DigitInfoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
