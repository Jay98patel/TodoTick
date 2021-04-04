import { DataSource } from "@angular/cdk/collections";
import { BehaviorSubject, Observable, of } from "rxjs";
import { catchError, finalize } from "rxjs/operators";
import { UserListService } from "../users/services/user-list.service";
import { User } from "../users/user.model";

export class UserDataSource implements DataSource<User> {

  private userSubject = new BehaviorSubject<User[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);

  public loader = this.loadingSubject.asObservable();

  constructor(private userListService: UserListService) { }

  connect(): Observable<User[]> {
    return this.userSubject.asObservable();
  }

  disconnect(): void {
    this.userSubject.complete();
    this.loadingSubject.complete();
  }

  loadUsers(q= '',_order = 'asc', _page = 0, _limit = 3) {
    this.loadingSubject.next(true);
    this.userListService.fetchUser(q, _order, _page+1, _limit)
      .pipe(
        catchError(() => of([])),
        finalize(() => this.loadingSubject.next(false))
      )
      .subscribe(
        users => this.userSubject.next(users)
      );
  }
}