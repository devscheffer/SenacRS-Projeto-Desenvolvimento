import { QuilometragemService } from './../quilometragem.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-visualiza-quilometragem',
  templateUrl: './visualiza-quilometragem.component.html',
  styleUrls: ['./visualiza-quilometragem.component.scss']
})
export class VisualizaQuilometragemComponent implements OnInit {

  title: string = '';
  columns: Object[] = [];
  data: Object[] = [];

  constructor(
    private route: ActivatedRoute,
    private kmService: QuilometragemService
  ) {
    this.title = route.snapshot.data['title'];
  }

  ngOnInit(): void {
    this.columns = [
      {
        title: 'km',
        data: 'km'
      },
      {
        title: 'Data',
        data: 'date'
      },
      {
        title: 'Observação',
        data: 'observation'
      }
    ]

    this.buscaDados();

  }

  buscaDados() {
    this.data = [];

    this.kmService.read_all()
    .subscribe(res => {

      res.forEach(item => {
        item.km == null ? item.km = 0 : item.km;
        let row = { 'km': item.km, 'date': this.formataData(item.date), 'observation': item.observation };
        this.data.push(row);
      });

    });

  }

  formataData(data: string) {
    return moment(data).format('DD/MM/YYYY');
  }

}
