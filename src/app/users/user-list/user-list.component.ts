import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../user.model'
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  usersList: User[]
  isUser:Boolean=true
  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
   this.getUser()
  }
  
  getUser(){
    this.route.data.subscribe((data:{userList:User[]})=>{
      this.usersList=data.userList;
    })
  }
}
