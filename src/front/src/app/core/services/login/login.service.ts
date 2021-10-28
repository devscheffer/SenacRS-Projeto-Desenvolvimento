import { TokenService } from './../token/token.service';
import { UserModel } from './../../models/login.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  uri: string;
  route: string;
  path: string;

  constructor(private http: HttpClient, private tokenService: TokenService) {
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
  authenticate(user: UserModel) {
    return this.http
      .post(this.uri + '/user/signup', user, { observe: 'response' })
      .pipe(
        tap((res) => {
          const authToken: any = res.headers.get('x-access-token');
          this.tokenService.setToken(authToken);
          console.log(`authenticated with token ${authToken}`);
        })
      );
  }
}