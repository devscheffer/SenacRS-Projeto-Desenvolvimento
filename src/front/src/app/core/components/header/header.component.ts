import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  icon = faBars;
  isCollapsed = true;

  paginas = [
    {
      nome: 'Cadastra pressão do pneu',
      rota: 'pneu/cadastra',
    },
    {
      nome: 'Cadastra combustivel',
      rota: 'combustivel/cadastra',
    },
    {
      nome: 'Cadastra manutenção',
      rota: 'manutencao/cadastra',
    },
    {
      nome: 'Login',
      rota: 'login',
    },
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {}

  direcionar(rota: string) {
    console.log('Redirecionando para página: ' + rota);
    this.isCollapsed = true;
    this.router.navigate([rota])
  }
}
