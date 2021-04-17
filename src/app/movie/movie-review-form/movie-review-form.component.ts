import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-movie-review-form',
  templateUrl: './movie-review-form.component.html',
  styleUrls: ['./movie-review-form.component.scss']
})
export class MovieReviewFormComponent implements OnInit {
  movieForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.buildMovieForm();
  }

  buildMovieForm() {
    this.movieForm = this.fb.group({
      movieName: [''],
      releaseDate: [''],
      movieRatings: [''],
      movieReview: [''],
      movieFavoriteScene: ['']
    })
  }

}
