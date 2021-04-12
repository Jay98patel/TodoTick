import { Component, OnInit } from '@angular/core';
import { BehaviourSubjectService } from '../Services/behaviour-subject.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  exclusive:boolean=false;

  constructor(private behavourService:BehaviourSubjectService) { }

  ngOnInit(): void {
    this.behavourService.exclusiveApp.subscribe((exclusiveValue)=>{
      this.exclusive=exclusiveValue;
    })
  }

}
