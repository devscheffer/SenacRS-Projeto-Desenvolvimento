import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from '../../models/login.model';
import { TokenService } from '../token/token.service';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  uri: string;

  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
    private router: Router
    ) {
    this.uri = 'https://herbie-21.herokuapp.com';
  }

  cadastro(user: UserModel) {
    return this.http.post(this.uri + '/user/signup', user, { observe: 'response' });
  }
}
