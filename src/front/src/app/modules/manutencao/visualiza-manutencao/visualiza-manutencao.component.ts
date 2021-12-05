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
  public loading: boolean = false;
  columns: Object[] = [];
  data: Object[] = [];

  constructor(
    private route: ActivatedRoute,
    private manutencaoervice: ManutencaoService
  ) {
    this.title = route.snapshot.data['title'];
  }

  async ngOnInit() {
    this.loading = true;

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

    await this.buscaDados();

    setTimeout(() => {
      this.loading = false;
    }, 500);

  }

  async buscaDados() {
    this.data = [];

    this.manutencaoervice.read_all()
    .subscribe(res => {
      res.forEach(item => {
        item.price == null ? item.price = 0 : null;
        let row = { 'service': item.service, 'category': item.category, 'date': this.formataData(item.date), 'price': item.price };
        this.data.push(row);
      });
    });

  }

  formataData(data: string) {
    return moment(data).add(1, 'd').format('YYYY/MM/DD');
  }

}
