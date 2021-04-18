import { Component, OnInit } from '@angular/core';
import { ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.scss']
})
export class RatingsComponent implements OnInit {
  ratingForm;
  detailReview: boolean=false;

  constructor(private controlContainer: ControlContainer) { }

  ngOnInit(): void {
    console.log(this.controlContainer.value)
    this.ratingForm = this.controlContainer.control;
  }

  loadReviewInDetail(detailReviews) {
    if(detailReviews.value == 1){
      this.detailReview = true;
    }
    else{
      this.detailReview=false
    }
  }
}
