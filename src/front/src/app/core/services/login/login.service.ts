import { UserModel } from './../../models/login.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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

  signup(user: UserModel): Observable<UserModel> {
    return this.http.post<UserModel>(`${this.path}/user/signup`, user);
  }
  login(user: UserModel): Observable<UserModel> {
    return this.http.post<UserModel>(`${this.path}/user/login`, user);
  }
}
