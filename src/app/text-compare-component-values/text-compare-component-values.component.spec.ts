import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextCompareComponentValuesComponent } from './text-compare-component-values.component';

describe('TextCompareComponentValuesComponent', () => {
  let component: TextCompareComponentValuesComponent;
  let fixture: ComponentFixture<TextCompareComponentValuesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextCompareComponentValuesComponent]
    });
    fixture = TestBed.createComponent(TextCompareComponentValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
