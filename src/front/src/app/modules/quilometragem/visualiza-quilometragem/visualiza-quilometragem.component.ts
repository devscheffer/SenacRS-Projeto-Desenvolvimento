import { QuilometragemService } from './../quilometragem.service';
import { AfterViewInit, Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-visualiza-quilometragem',
  templateUrl: './visualiza-quilometragem.component.html',
  styleUrls: ['./visualiza-quilometragem.component.scss'],
})
export class VisualizaQuilometragemComponent implements AfterViewInit, OnInit {
  title: string = '';
  public loading: boolean = false;
  columns: Object[] = [];
  data: Object[] = [];

  constructor(
    private route: ActivatedRoute,
    private kmService: QuilometragemService,
    private renderer: Renderer2,
    private router: Router
  ) {
    this.title = route.snapshot.data['title'];
  }

  async ngOnInit() {
    this.loading = true;

    this.columns = [
      {
        title: 'km',
        data: 'km',
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

    this.kmService.read_all().subscribe((res) => {
      res.forEach((item) => {
        item.km == null ? (item.km = 0) : item.km;
        let row = {
          km: item.km,
          date: this.formataData(item.date),
          observation: item.observation,
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
            this.kmService
              .read_id(event.target.getAttribute('item-id'))
              .subscribe((res) => {
                this.router.navigate(['home/quilometragem/visualiza', res._id])
              });
            break;
          }
      }
    });
  }
}
