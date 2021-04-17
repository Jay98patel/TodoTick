import { Component, OnInit } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { keyValuePair, masterData } from 'src/app/shared/masterData/masterData';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  moviesName: keyValuePair[];
  movieForm;
  constructor(private masterData: masterData,private controlContainer:ControlContainer) { }

  ngOnInit(): void {
    this.moviesName = this.masterData.MoviesName();
    this.movieForm=this.controlContainer.control;
  }

}
