import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieComponent } from './movie.component';
import { RatingsComponent } from './ratings/ratings.component';

const routes: Routes = [
  {
    path: '', component:MovieComponent
  },
  {
    path:'ratings',component:RatingsComponent
  },
  {
    path:'review',component:RatingsComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
