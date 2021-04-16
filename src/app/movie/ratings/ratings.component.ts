import { Component, OnInit } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.scss']
})
export class RatingsComponent implements OnInit {
  ratingForm;
  constructor(private controlContainer:ControlContainer,private router: Router) { }

  ngOnInit(): void {
    this.ratingForm=this.controlContainer.control;
  }

  loadNextStep(){
    this.router.navigate(['movies/review']);  
  }

}
