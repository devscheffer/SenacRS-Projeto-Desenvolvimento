import { Router } from '@angular/router';
import { LoginService } from './../../services/login/login.service';
import { Component, OnInit } from '@angular/core';
import {
  faBook,
  faChartBar,
  faClipboardList,
  faPlusCircle,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  iconeManual = faBook;
  iconeAdicionar = faPlusCircle;
  iconeDashboard = faChartBar;
  iconeVisualizar = faClipboardList;
  iconeLogin = faUser;
  buttonDash: string = '';
  buttonManual: string = '';
  buttonAdd: string = '';
  buttonView: string = '';

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {}

  sair() {
    this.loginService.logout();
    this.router.navigate(['login']);
  }

  dashboard() {
    this.buttonDash = 'buttonActive';
  }

  manual() {
    this.buttonManual = 'buttonActive';
  }

  adicionar() {
    this.buttonAdd = 'buttonActive';
  }

  visualizar() {
    this.buttonView = 'buttonActive';
  }

  removeActive(value?: string) {
    if (value == 'dash') {
      this.buttonManual = '';
      this.buttonAdd = '';
      this.buttonView = '';
    } else if (value == 'manual') {
      this.buttonDash = '';
      this.buttonAdd = '';
      this.buttonView = '';
    } else if (value == 'add') {
      this.buttonDash = '';
      this.buttonManual = '';
      this.buttonView = '';
    } else if (value == 'view') {
      this.buttonDash = '';
      this.buttonManual = '';
      this.buttonAdd = '';
    } else {
      this.buttonDash = '';
      this.buttonManual = '';
      this.buttonAdd = '';
      this.buttonView = '';
    }
  }
}
