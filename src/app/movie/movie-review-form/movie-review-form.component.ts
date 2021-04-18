import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

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
      movieGraphics: [''],
      movieStoryLine: [''],
      movieActorsActing: [''],
      movieCinemetography: [''],
      movieScene:[''],
      movieDialogues:[''],
      movieReview: [''],
      movieFavoriteScene: [''],
      userName:[''],
      userAge:['']
    })
  }

  initializeMovieCast(){
    return this.fb.group({
     cast : [""],
    });
  }

  movieCastArrayControl(){
    return (this.movieForm.get('movieCast') as FormArray).controls;
  }

}
