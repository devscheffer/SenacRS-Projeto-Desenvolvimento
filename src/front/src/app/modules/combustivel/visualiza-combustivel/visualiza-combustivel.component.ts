import { CombustivelService } from './../combustivel.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-visualiza-combustivel',
  templateUrl: './visualiza-combustivel.component.html',
  styleUrls: ['./visualiza-combustivel.component.scss'],
})
export class VisualizaCombustivelComponent implements OnInit {
  title: string = '';
  columns: Object[] = [];
  data: Object[] = [];
  public loading: boolean = false;

  tiposCombustiveis = [
    { name: 'Comum', value: 'gasolina_comum' },
    { name: 'Aditivada', value: 'gasolina_aditivada' },
    { name: 'Etanol', value: 'etanol' },
    { name: 'GNV', value: 'gnv' },
    { name: 'Diesel', value: 'diesel' },
  ];

  constructor(
    private route: ActivatedRoute,
    private combustivelService: CombustivelService
  ) {
    this.title = route.snapshot.data['title'];
  }

  async ngOnInit() {
    this.loading = true;
    this.columns = [
      {
        title: 'Tipo',
        data: 'gas_type',
      },
      {
        title: 'Volume',
        data: 'volume',
      },
      {
        title: 'Data',
        data: 'date',
      },
      {
        title: 'Preço',
        data: 'price',
      },
    ];

    await this.buscaDados();
    setTimeout(() => {
      this.loading = false;
    }, 500);
  }

  async buscaDados() {
    this.data = [];

    this.combustivelService.read_all().subscribe((res) => {
      res.forEach((item) => {
        let row = {
          gas_type: this.validaPosicao(item.gas_type),
          volume: item.volume,
          date: this.formataData(item.date),
          price: item.price,
        };
        this.data.push(row);
        
      });
    });
  }

  formataData(data: string) {
    return moment(data).format('DD/MM/YYYY');
  }

  validaPosicao(tipoEscolhido: string) {
    let tipo = this.tiposCombustiveis.filter(
      (tipo) => tipo.value == tipoEscolhido
    );
    return tipo[0].name;
  }
}
