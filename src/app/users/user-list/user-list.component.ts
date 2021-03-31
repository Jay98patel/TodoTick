import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { User } from '../user.model'
/**
 * get the users list with route resolve
 * give access to some users to TODO list
 * error handling
 */

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  usersList: User[];
  isUser: Boolean = true;
  error: string;
  constructor(private route: ActivatedRoute, private router: Router,public notifierService: NotifierService) { 
    this.notifierService = notifierService;
  }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.route.data.subscribe(
      (data: { userList: User[] }) => {
      this.usersList = data.userList;
      this.notifierService.notify("User List","updated");
    },
    (error)=>{
      this.error = error;
      console.log("error in userlist")
      this.notifierService.notify("",this.error);
    });
  }

  editUserForm(user) {
    this.router.navigateByUrl('/users', { state: user })
  }

  loadTodoApp(user: User) {
    this.router.navigate(['../../todo', user.id, user.role], { queryParamsHandling: "preserve" });
  }
}
