import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberGeneratorComponentComponent } from './number-generator-component.component';

describe('NumberGeneratorComponentComponent', () => {
  let component: NumberGeneratorComponentComponent;
  let fixture: ComponentFixture<NumberGeneratorComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NumberGeneratorComponentComponent]
    });
    fixture = TestBed.createComponent(NumberGeneratorComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
