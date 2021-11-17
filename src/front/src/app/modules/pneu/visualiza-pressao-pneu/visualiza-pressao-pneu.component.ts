import { PneuService } from './../pneu.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-visualiza-pressao-pneu',
  templateUrl: './visualiza-pressao-pneu.component.html',
  styleUrls: ['./visualiza-pressao-pneu.component.scss']
})
export class VisualizaPressaoPneuComponent implements OnInit {

  title: string = '';
  public loading: boolean = false;
  columns: Object[] = [];
  data: Object[] = [];
  icon = faPlus;

  opcoes = [
    { name: 'Frente Esquerda', value: 'fl' },
    { name: 'Frente Direita', value: 'fr' },
    { name: 'Traseira Esquerda', value: 'bl' },
    { name: 'Traseira Direita', value: 'br' }
  ]

  constructor(
    private route: ActivatedRoute,
    private pneuService: PneuService
  ) {
    this.title = route.snapshot.data['title'];
  }

  async ngOnInit() {
    this.loading = true;

    this.columns = [
      {
        title: 'Posição',
        data: 'position'
      },
      {
        title: 'Pressão',
        data: 'pressure'
      },
      {
        title: 'Data',
        data: 'date'
      },
      {
        title: 'Obs',
        data: 'observation'
      }
    ]

    await this.buscaDados();
    setTimeout(() => {
      this.loading = false;
    }, 500);

  }

  async buscaDados() {
    this.data = [];

    this.pneuService.read_all()
    .subscribe(res => {

      res.forEach(item => {
        item.pressure_old == null ? item.pressure_old = 0 : item.pressure_old;
        let row = { 'position': this.validaPosicao(item.position), 'pressure': item.pressure_old, 'date': this.formataData(item.date), 'observation': item.observation };
        this.data.push(row);
      });

    });

  }

  formataData(data: string) {
    return moment(data).format('DD/MM/YYYY');
  }

  validaPosicao(siglaPosicao: string) {
    let posicao = this.opcoes.filter(posicao => posicao.value == siglaPosicao);
    return posicao[0].name;
  }

}
