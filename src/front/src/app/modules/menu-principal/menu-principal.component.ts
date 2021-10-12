import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.scss']
})
export class MenuPrincipalComponent implements OnInit {

  columns: Object[] = [];
  data: Object[] = [];

  constructor() { }

  ngOnInit(): void {
    this.columns = [
      {
        title: 'ID',
        data: 'id'
      },
      {
        title: 'Primeiro Nome',
        data: 'firstName'
      },
      {
        title: 'Segundo Nome',
        data: 'lastName'
      },
    ]

    this.data = [
      { "id": 860, "firstName": "Superman", "lastName": "Yoda" },
      { "id": 870, "firstName": "Foo", "lastName": "Whateveryournameis" },
      { "id": 590, "firstName": "Toto", "lastName": "Titi" },
      { "id": 803, "firstName": "Luke", "lastName": "Kyle" },
      { "id": 474, "firstName": "Toto", "lastName": "Bar" },
      { "id": 476, "firstName": "Zed", "lastName": "Kyle" },
      { "id": 464, "firstName": "Cartman", "lastName": "Kyle" },
      { "id": 505, "firstName": "Superman", "lastName": "Yoda" },
      { "id": 308, "firstName": "Louis", "lastName": "Kyle" },
      { "id": 184, "firstName": "Toto", "lastName": "Bar" },
      { "id": 411, "firstName": "Luke", "lastName": "Yoda" },
      { "id": 154, "firstName": "Luke", "lastName": "Moliku" },
      { "id": 623, "firstName": "Someone First Name", "lastName": "Moliku" }
    ]
  }

}
