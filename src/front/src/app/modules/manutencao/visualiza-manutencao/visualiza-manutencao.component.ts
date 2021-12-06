import { ManutencaoService } from './../manutencao.service';
import { AfterViewInit, Component, OnInit, Renderer2 } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { faUser } from '@fortawesome/free-solid-svg-icons';

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
  iconeLogin = faUser;

  constructor(
    private route: ActivatedRoute,
    private manutencaoervice: ManutencaoService
    ,private renderer: Renderer2,
    private router: Router
  ) {
    this.title = route.snapshot.data['title'];
  }

  async ngOnInit() {
    this.loading = true;

    this.columns = [
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
      },
      {
        title: 'Visualizar',
        data: '_id',
        render: function (data: any, type: any, full: any) {
          return `
          <button class="btn btn-primary fa fa-eye fa-2x" item-id="${data}" button-type="view"></button>            `;
        },
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
        let row = { 'category': item.category, 'date': this.formataData(item.date), 'price': item.price ,
        _id: item._id,
      };
        this.data.push(row);
      });
    });

  }

  formataData(data: string) {
    return moment(data).add(1, 'd').format('YYYY/MM/DD');
  }

  ngAfterViewInit(): void {
    this.renderer.listen('document', 'click', (event) => {
      if (event.target.hasAttribute('item-id')) {
        switch (event.target.getAttribute('button-type')) {
          case 'view':
            this.manutencaoervice
              .read_id(event.target.getAttribute('item-id'))
              .subscribe((res) => {
                this.router.navigate(['home/manutencao/visualiza', res._id]);
              });
            break;
        }
      }
    });
  }
}
