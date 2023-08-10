import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuplicateCheckAppComponent } from './duplicate-check-app.component';

describe('DuplicateCheckAppComponent', () => {
  let component: DuplicateCheckAppComponent;
  let fixture: ComponentFixture<DuplicateCheckAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DuplicateCheckAppComponent]
    });
    fixture = TestBed.createComponent(DuplicateCheckAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
