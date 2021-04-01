import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.route.data.subscribe(
      (data: { userList: User[] }) => {
        this.usersList = data.userList;
      },
      (error) => {
        this.error = error;
        console.log("error in userlist");
      });
  }

  editUserForm(user) {
    this.router.navigateByUrl('/users', { state: user })
  }

  loadTodoApp(user: User) {
    this.router.navigate(['../../todo', user.id, user.role], { queryParamsHandling: "preserve" });
  }
}
