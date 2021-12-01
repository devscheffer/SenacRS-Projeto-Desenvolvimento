import { HomeService } from './../../services/home/home.service';
import { LoginService } from './../../services/login/login.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private loginService: LoginService,
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.buscaDados();
  }

  buscaDados() {
    this.homeService.read_all().subscribe(
      res => {
      }, err => {
        let erro: HttpErrorResponse = err;
        if (erro.status == 401) {
          this.loginService.logout();
        }
      }
    )
  }

}
