import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionFinder1Component } from './position-finder1.component';

describe('PositionFinder1Component', () => {
  let component: PositionFinder1Component;
  let fixture: ComponentFixture<PositionFinder1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PositionFinder1Component]
    });
    fixture = TestBed.createComponent(PositionFinder1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
