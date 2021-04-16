import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../user.model';

@Injectable()
export class UserListService {
  private baseURL: string;
  constructor(private http: HttpClient) {
    this.baseURL = environment.apiUrl;
  }

  fetchUser(q = '',  _order = 'asc', _page = 0, _limit = 3): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseURL}/users`, {
      params: new HttpParams()
        // .set('id', id.toString())
        .set('q', q)
        .set('_order', _order)
        .set('_page', _page.toString())
        .set('_limit', _limit.toString())
    });
  }
}
