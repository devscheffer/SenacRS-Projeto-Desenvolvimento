import { Component, OnInit } from '@angular/core';
import { faBook, faChartPie, faClipboardList, faPlusCircle, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  iconeManual = faBook;
  iconeAdicionar = faPlusCircle;
  iconeDashboard = faChartPie;
  iconeVisualizar = faClipboardList;
  iconeLogin = faUser;

  constructor() { }

  ngOnInit(): void {
  }

}
