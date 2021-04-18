import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormArray, FormBuilder } from '@angular/forms';
import { keyValuePair, masterData } from 'src/app/shared/masterData/masterData';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  moviesName: keyValuePair[];
  movieForm;
  constructor(private masterData: masterData, private controlContainer: ControlContainer, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.moviesName = this.masterData.MoviesName();
    this.movieForm = this.controlContainer.control;
  }

  get movieCastArray(): FormArray {
    return this.controlContainer.control as FormArray;
  }

}
