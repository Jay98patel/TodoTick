import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../user.model';

@Injectable()
export class UserService {
  private baseURL: string;
  constructor(private http: HttpClient) {
    this.baseURL = environment.apiUrl;
  }

  getAllUsersList(): Observable<User[]> {
    return this.http.get<User[]>(this.baseURL+`/`+'users');
  }

}
