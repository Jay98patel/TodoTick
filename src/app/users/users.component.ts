import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviourSubjectService } from '../Services/behaviour-subject.service';
import { UserService } from './services/user.service';
import { User } from './user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {
  userEditForm:User
  constructor(private userService:UserService,private behaviorService:BehaviourSubjectService) { }

  ngOnInit() {
    this.behaviorService.exclusiveApp.next(true);
  }

  saveUsers(users:User) {
    console.log(users)
    this.userService.createUsers(users).subscribe((user)=>{
      console.log("user Data has been saved as",user)
    },(err)=>{
      console.log("somethings went wrong",err)
    })
  }

  ngOnDestroy(){
    this.behaviorService.exclusiveApp.next(false);
  }

}
