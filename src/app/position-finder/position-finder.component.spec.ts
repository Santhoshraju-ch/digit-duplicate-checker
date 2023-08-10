import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionFinderComponent } from './position-finder.component';

describe('PositionFinderComponent', () => {
  let component: PositionFinderComponent;
  let fixture: ComponentFixture<PositionFinderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PositionFinderComponent]
    });
    fixture = TestBed.createComponent(PositionFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
