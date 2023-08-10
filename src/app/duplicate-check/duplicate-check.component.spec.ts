import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuplicateCheckComponent } from './duplicate-check.component';

describe('DuplicateCheckComponent', () => {
  let component: DuplicateCheckComponent;
  let fixture: ComponentFixture<DuplicateCheckComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DuplicateCheckComponent]
    });
    fixture = TestBed.createComponent(DuplicateCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
