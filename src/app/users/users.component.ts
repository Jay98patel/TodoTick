import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { User } from './user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  userEditForm:User
  constructor(private userService:UserService) { }

  ngOnInit() {
  }

  saveUsers(users:User) {
    console.log(users)
    this.userService.createUsers(users).subscribe((user)=>{
      console.log("user Data has been saved as",user)
    },(err)=>{
      console.log("somethings went wrong",err)
    })
  }

}
