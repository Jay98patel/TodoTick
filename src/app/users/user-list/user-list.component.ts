import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { fromEvent, merge } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { UserListService } from '../services/user-list.service';
import { UserDataSource } from '../shared/userCdkTable';
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
export class UserListComponent implements OnInit, AfterViewInit {
  usersList: User[];
  user: User;
  isUser: Boolean = true;
  error: string;
  dataSource: MatTableDataSource<User>;
  dataSourcePagination: UserDataSource;
  displayedColumns = ['id', 'firstName', 'userName', 'role', 'count', 'status'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('input') input: ElementRef;

  constructor(private route: ActivatedRoute, private router: Router, private userListService: UserListService) {
  }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.route.data.subscribe(
      (data: { userList: User[] }) => {
        this.usersList = data.userList;
        this.dataSource = new MatTableDataSource(this.usersList)
        this.dataSourcePagination = new UserDataSource(this.userListService);
        this.dataSourcePagination.loadUsers('', 'asc', 0, 3);
      },
      (error) => {
        this.error = error;
        console.log("error in userlist");
      });
  }

  ngAfterViewInit() {
    fromEvent(this.input.nativeElement,'keyup')
    .pipe(
        debounceTime(150),
        distinctUntilChanged(),
        tap(() => {
            this.paginator.pageIndex = 0;
            this.loadLessonsPage();
        })
    )
    .subscribe();

    this.sort.sortChange.subscribe(
      () => this.paginator.pageIndex = 0);
    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        tap(() => this.loadLessonsPage())
      )
      .subscribe();
    // this.paginator.page
    //   .pipe(
    //     tap(() => this.loadLessonsPage())
    //   )
    //   .subscribe();
  }

  loadLessonsPage() {
    this.dataSourcePagination.loadUsers(
      this.input.nativeElement.value,
      this.sort.direction,
      this.paginator.pageIndex,
      this.paginator.pageSize);
  }

  userDetails(row) {
    console.log(row)
  }

  editUserForm(user) {
    this.router.navigateByUrl('/users', { state: user })
  }

  loadTodoApp(user: User) {
    this.router.navigate(['../../todo', user.id, user.role], { queryParamsHandling: "preserve" });
  }
}
