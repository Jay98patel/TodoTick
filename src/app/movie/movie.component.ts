import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { keyValuePair, masterData } from '../shared/masterData/masterData';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  movieForm: FormGroup;
  moviesName: keyValuePair[];

  constructor(private fb: FormBuilder, private masterData: masterData, private router: Router) { }

  ngOnInit(): void {
    this.buildMovieForm();
    this.moviesName = this.masterData.MoviesName();
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
  
  loadNextStep() {
    this.router.navigate(['movie/ratings']);
  }
}
