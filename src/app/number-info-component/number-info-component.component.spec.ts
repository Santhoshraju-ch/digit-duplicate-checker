import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberInfoComponentComponent } from './number-info-component.component';

describe('NumberInfoComponentComponent', () => {
  let component: NumberInfoComponentComponent;
  let fixture: ComponentFixture<NumberInfoComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NumberInfoComponentComponent]
    });
    fixture = TestBed.createComponent(NumberInfoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
