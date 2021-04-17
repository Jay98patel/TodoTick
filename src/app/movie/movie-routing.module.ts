import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieReviewFormComponent } from './movie-review-form/movie-review-form.component';
import { RatingsComponent } from './ratings/ratings.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

const routes: Routes = [
  {
    path: '', component: MovieReviewFormComponent,
    children: [
      {
        path:'',component:UserDetailComponent
      },
      {
        path: 'movieDetails', component: UserDetailComponent
      },
      {
        path: 'ratings', component: RatingsComponent
      },
      {
        path: 'review', component: ReviewsComponent
      }
      ,
    ]
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
