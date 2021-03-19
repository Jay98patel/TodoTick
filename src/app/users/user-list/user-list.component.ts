import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user.model'
/**
 * get the users list with route resolve
 */

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  usersList: User[];
  isUser:Boolean=true;
  constructor(private route: ActivatedRoute, private router:Router) { }

  ngOnInit() {
   this.getUser();
  }
  
  getUser(){
    this.route.data.subscribe((data:{userList:User[]})=>{
      this.usersList=data.userList;
    });
  }
  
  loadTodoApp(user:User){
    this.router.navigate(['../../todo',user.id,user.role],{ queryParamsHandling: "preserve" });
  }
}
