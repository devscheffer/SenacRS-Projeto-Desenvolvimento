import { PressaoService } from '../pressao.service';
import { AfterViewInit, Component, OnInit, Renderer2 } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-visualiza-pressao',
  templateUrl: './visualiza-pressao.component.html',
  styleUrls: ['./visualiza-pressao.component.scss'],
})
export class VisualizaPressaoComponent implements AfterViewInit, OnInit {
  title: string = '';
  public loading: boolean = false;
  columns: Object[] = [];
  data: Object[] = [];
  icon = faPlus;

  opcoes = [
    { name: 'Frente Esquerda', value: 'fl' },
    { name: 'Frente Direita', value: 'fr' },
    { name: 'Traseira Esquerda', value: 'bl' },
    { name: 'Traseira Direita', value: 'br' },
  ];

  constructor(
    private route: ActivatedRoute,
    private PressaoService: PressaoService,
    private renderer: Renderer2,
    private router: Router
  ) {
    this.title = route.snapshot.data['title'];
  }

  async ngOnInit() {
    this.loading = true;

    this.columns = [
      {
        title: 'Posição',
        data: 'position',
      },
      {
        title: 'Pressão',
        data: 'pressure',
      },
      {
        title: 'Data',
        data: 'date',
      },
      {
        title: 'Observação',
        data: 'observation',
      },
      {
        title: 'Action',
        data: '_id',
        render: function (data: any, type: any, full: any) {
          return `
            <button class="btn btn-primary" item-id="${data}" button-type="view">View</button>
            `;
        },
      },
    ];

    await this.buscaDados();
    setTimeout(() => {
      this.loading = false;
    }, 500);
  }

  async buscaDados() {
    this.data = [];

    this.PressaoService.read_all().subscribe((res) => {
      res.forEach((item) => {
        item.pressure_old == null ? (item.pressure_old = 0) : item.pressure_old;
        let row = {
          position: this.validaPosicao(item.position),
          pressure: item.pressure_old,
          date: this.formataData(item.date),
          observation: item.observation,
          _id: item._id,
        };
        this.data.push(row);
      });
    });
  }

  formataData(data: string) {
    return moment(data).format('YYYY/MM/DD');
  }

  validaPosicao(siglaPosicao: string) {
    let posicao = this.opcoes.filter(
      (posicao) => posicao.value == siglaPosicao
    );
    return posicao[0].name;};

    ngAfterViewInit(): void {
      this.renderer.listen('document', 'click', (event) => {
        if (event.target.hasAttribute('item-id')) {
          switch (event.target.getAttribute('button-type')) {
            case 'view':
              this.PressaoService
                .read_id(event.target.getAttribute('item-id'))
                .subscribe((res) => {
                  console.log(res._id);
                  this.router.navigate(['home/pressao/visualiza', res._id]);
                });
              break;
          }
        }
      });
    }
}
