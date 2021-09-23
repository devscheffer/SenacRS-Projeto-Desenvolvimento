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
      rota: 'cadastra-pressao-pneu',
    },
    {
      nome: 'Página 2',
      rota: 'pagina2',
    }
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {}

  direcionar(rota: string) {
    console.log('Redirecionando para página: ' + rota);
    // this.router.navigate([rota])
  }
}
