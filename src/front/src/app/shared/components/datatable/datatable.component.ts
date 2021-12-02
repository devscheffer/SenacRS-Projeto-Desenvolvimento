import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss'],
})
export class DatatableComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  @Input() columns: Object[] = [];
  @Input() data: Object[] = [];

  constructor() {}

  ngOnInit(): void {
    this.dtOptions = {
      columns: this.columns,
      data: this.data,
      pagingType: 'full_numbers',
      pageLength: 10,
      language: {
        paginate: {
          first: 'Primeiro',
          last: 'Último',
          next: 'Próximo',
          previous: 'Anterior',
        },
        search: 'Buscar',
        emptyTable: 'Não há dados na tabela.',
        zeroRecords: 'Nenhum dado correspondente.',
      },
    };
    console.log(this.dtOptions);
  }
}
