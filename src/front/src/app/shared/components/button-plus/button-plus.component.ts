import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-button-plus',
  templateUrl: './button-plus.component.html',
  styleUrls: ['./button-plus.component.scss']
})
export class ButtonPlusComponent implements OnInit {

  icon = faPlus;
  @Input() rota: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  direciona() {
    this.router.navigate(['home/' + this.rota]);
  }

}
