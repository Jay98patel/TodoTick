import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { UserListService } from '../services/user-list.service';
import { UserDataSource } from '../../shared/userCdkTable';
import { User } from '../user.model'
/**
 * 
 * get the users list with route resolve
 * give access to some users to TODO list
 * error handling
 * 
 */

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, AfterViewInit {
  usersList: User[];
  user: User;
  // isUser: Boolean = true;
  error: string;
  dataSource: MatTableDataSource<User>;
  dataSourcePagination: UserDataSource;
  displayedColumns = ['id', 'firstName', 'userName', 'role', 'count', 'status'];
  noRecordFound: boolean = false;
  searchText
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('input') input: ElementRef;

  constructor(private route: ActivatedRoute, private router: Router, private userListService: UserListService) {
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.route.data.subscribe(
      (data: { userList: User[] }) => {
        this.usersList = data.userList;
        this.dataSourcePagination = new UserDataSource(this.userListService);
        this.dataSourcePagination.loadUsers('', 'asc', 0, 3);
      },
      (error) => {
        this.error = error;
        console.log("error in userlist");
      });
  }

  onSearchText(searchText) {
    this.searchText = searchText.target.value;
    this.paginator.pageIndex=0
    this.loadUsersPage();
  }

  ngAfterViewInit() {
    this.paginator.page
      .pipe(
        tap(() => this.loadUsersPage())
      )
      .subscribe();
  }

  loadUsersPage() {
    this.dataSourcePagination.loadUsers(
      this.searchText,
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
/*fromEvent(this.input.nativeElement, 'keyup')
      .pipe(
        debounceTime(150),
        distinctUntilChanged(),
        tap(() => {
          // this.noRecordFound = false,
          this.paginator.pageIndex = 0;
          this.loadLessonsPage();
        })
      )
      .subscribe((err) => {
        this.noRecordFound = true
      });
    this.sort.sortChange.subscribe(
      () => this.paginator.pageIndex = 0);
    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        tap(() => this.loadLessonsPage())
      ).subscribe();*/