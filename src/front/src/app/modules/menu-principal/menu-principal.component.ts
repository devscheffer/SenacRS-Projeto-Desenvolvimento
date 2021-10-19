import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.scss']
})
export class MenuPrincipalComponent implements OnInit {

  title: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.title = route.snapshot.data['title'];
  }

  ngOnInit(): void {}

  direcionaRota(rota: string) {
    this.router.navigate([rota]);
  }

}
