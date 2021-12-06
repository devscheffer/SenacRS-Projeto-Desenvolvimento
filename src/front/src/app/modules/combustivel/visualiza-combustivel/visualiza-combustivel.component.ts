import { CombustivelService } from './../combustivel.service';
import { AfterViewInit, Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-visualiza-combustivel',
  templateUrl: './visualiza-combustivel.component.html',
  styleUrls: ['./visualiza-combustivel.component.scss'],
})
export class VisualizaCombustivelComponent implements AfterViewInit,OnInit {
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
    private combustivelService: CombustivelService,
    private renderer: Renderer2,
    private router: Router
  ) {
    this.title = route.snapshot.data['title'];
  }

  async ngOnInit() {
    this.loading = true;
    this.columns = [
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
      {
        title: 'Visualizar',
        data: '_id',
        render: function (data: any, type: any, full: any) {
          return `
          <button class="btn btn-primary fa fa-eye fa-2x" item-id="${data}" button-type="view"></button>          `;
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

    this.combustivelService.read_all().subscribe((res) => {
      res.forEach((item) => {
        let row = {
          volume: item.volume,
          date: this.formataData(item.date),
          price: item.price,
          _id: item._id,
        };
        this.data.push(row);

      });
    });
  }

  formataData(data: string) {
    return moment(data).add(1, 'd').format('YYYY/MM/DD');
  }

  validaPosicao(tipoEscolhido: string) {
    let tipo = this.tiposCombustiveis.filter(
      (tipo) => tipo.value == tipoEscolhido
    );
    return tipo[0].name;
  }

  ngAfterViewInit(): void {
    this.renderer.listen('document', 'click', (event) => {

      if (event.target.hasAttribute('item-id')) {
        switch (event.target.getAttribute('button-type')) {
          case 'view':

            this.combustivelService
              .read_id(event.target.getAttribute('item-id'))
              .subscribe((res) => {
                this.router.navigate(['home/combustivel/visualiza', res._id]);
              }, err => {
                console.log(err);
              });
            break;
        }
      }
    });
};
}
