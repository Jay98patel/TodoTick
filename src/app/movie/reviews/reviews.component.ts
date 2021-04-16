import { Component, OnInit } from '@angular/core';
import { ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {
  public movieForm;
  constructor(private controlContainer:ControlContainer) { }

  ngOnInit(): void {
    this.movieForm=this.controlContainer.control;
  }

}
