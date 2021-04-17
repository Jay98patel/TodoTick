import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieReviewFormComponent } from './movie-review-form.component';

describe('MovieReviewFormComponent', () => {
  let component: MovieReviewFormComponent;
  let fixture: ComponentFixture<MovieReviewFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieReviewFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieReviewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
