import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostionCheckValueComponent } from './postion-check-value.component';

describe('PostionCheckValueComponent', () => {
  let component: PostionCheckValueComponent;
  let fixture: ComponentFixture<PostionCheckValueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostionCheckValueComponent]
    });
    fixture = TestBed.createComponent(PostionCheckValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
