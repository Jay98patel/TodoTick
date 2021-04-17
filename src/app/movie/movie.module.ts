import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import { MovieComponent } from './movie.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { RatingsComponent } from './ratings/ratings.component';
import { masterData } from '../shared/masterData/masterData';
import { MovieReviewFormComponent } from './movie-review-form/movie-review-form.component';


@NgModule({
  declarations: [MovieComponent, ReviewsComponent,RatingsComponent, UserDetailComponent, MovieReviewFormComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    MovieRoutingModule,
    ReactiveFormsModule,
  ],
  providers:[masterData]
})
export class MovieModule { }
