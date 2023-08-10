import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuplicatedValue123Component } from './duplicated-value123.component';

describe('DuplicatedValue123Component', () => {
  let component: DuplicatedValue123Component;
  let fixture: ComponentFixture<DuplicatedValue123Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DuplicatedValue123Component]
    });
    fixture = TestBed.createComponent(DuplicatedValue123Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
