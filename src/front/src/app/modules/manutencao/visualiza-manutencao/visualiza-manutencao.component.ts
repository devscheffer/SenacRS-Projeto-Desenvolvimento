import { ManutencaoService } from './../manutencao.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-visualiza-manutencao',
  templateUrl: './visualiza-manutencao.component.html',
  styleUrls: ['./visualiza-manutencao.component.scss']
})
export class VisualizaManutencaoComponent implements OnInit {

  title: string = '';
  columns: Object[] = [];
  data: Object[] = [];

  constructor(
    private route: ActivatedRoute,
    private manutencaoervice: ManutencaoService
  ) {
    this.title = route.snapshot.data['title'];
  }

  ngOnInit(): void {
    this.columns = [
      {
        title: 'Servico',
        data: 'service'
      },
      {
        title: 'Categoria',
        data: 'category'
      },
      {
        title: 'Data',
        data: 'date'
      },
      {
        title: 'Preço',
        data: 'price'
      }
    ]

    this.buscaDados();

  }

  buscaDados() {
    this.data = [];

    this.manutencaoervice.read_all()
    .subscribe(res => {

      res.forEach(item => {
        let row = { 'service': item.service, 'category': item.category, 'date': this.formataData(item.date), 'price': item.observation };
        this.data.push(row);
      });

    });

  }

  formataData(data: string) {
    return moment(data).format('DD/MM/YYYY');
  }

}
