import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './login.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

    uri: string;
    route: string;
    path: string;

  constructor(private http: HttpClient) {
    this.uri = 'https://herbie-21.herokuapp.com';
    this.route = '';
    this.path = `${this.uri}${this.route}`;
  }

  signup(user: User): Observable<User> {
    return this.http.post<User>(`${this.path}/user/signup`, user);
  }
  login(user: User): Observable<User> {
    return this.http.post<User>(`${this.path}/user/login`, user);
  }
}
