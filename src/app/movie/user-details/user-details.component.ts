import { Component, OnInit } from '@angular/core';
import { ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  public userForm;
  showMovieReview:boolean=false;
  constructor(private controlContainer:ControlContainer) { }

  ngOnInit(): void {
    this.userForm=this.controlContainer.control;
    console.log(this.userForm)
  }

  showMovieReviewInfo(){
    if(this.userForm.valid){
      this.showMovieReview=true;
    }
  }

}
