import { PressaoModel } from 'src/app/shared/models/pressao.model';
import { CombustivelModel } from './../../shared/models/combustivel.model';
import { KmModel } from './../../shared/models/quilometragem.model';
import { QuilometragemService } from './../quilometragem/quilometragem.service';
import { PressaoService } from '../pressao/pressao.service';
import { CombustivelService } from './../combustivel/combustivel.service';
import { ManutencaoModel } from './../../shared/models/manutencao.model';
import { ManutencaoService } from './../manutencao/manutencao.service';
import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import * as moment from 'moment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public loading: boolean = false;
  dataSourceManutencao: Object = {};
  dataSourceCombustivel: Object = {};
  dataSourcePneu: Object = {};
  dataSourceKm: Object = {};
  manutencoes: ManutencaoModel[] = [];
  combustivel: CombustivelModel[] = [];
  pneu: PressaoModel[] = [];
  km: KmModel[] = [];
  chart_pneu: EChartsOption = {};
  chart_km: EChartsOption = {};
  chart_gas: EChartsOption = {};
  chart_manutencao: EChartsOption = {};
  initOpts = {
    renderer: 'svg',
    width: 300,
    height: 300,
  };
  constructor(
    private manutencaoService: ManutencaoService,
    private combustivelService: CombustivelService,
    private PressaoService: PressaoService,
    private kmService: QuilometragemService
  ) {}

  async ngOnInit() {
    this.loading = true;
    await this.buscaDadosManutencoes();
    await this.buscaDadosCombustivel();
    await this.buscaDadosPressaoPneu();
    await this.buscaDadosKm();
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }

  async buscaDadosManutencoes() {
    this.manutencaoService.read_all().subscribe(
      (res) => {
        this.manutencoes = res;
        let lst_data: any[] = [];
        this.manutencoes.forEach((item) => {
          lst_data.push(item);
        });

        let dataSeries: any[] = [];

        let data_motor_valores: any[] = [];
        let data_motor_object = {};

        let data_rodas_valores: any[] = [];
        let data_rodas_object = {};

        let lst_data_sort = lst_data.sort((a, b) => (a.date > b.date ? 1 : -1));
        let data_dates: any[] = [];
        let data_motor: any[] = [];
        let data_rodas: any[] = [];
        let data_suspencao: any[] = [];
        let data_arrefecimento: any[] = [];
        let data_pecas: any[] = [];

        lst_data_sort.forEach((item) => {
          // console.log(item);

          let data_formatada = moment(item.date, 'YYYY-MM-DD').format(
            'YYYY-MM-DD'
          );
          data_dates.push(data_formatada);

          if (item.category.toLowerCase() == 'motor') {
            let valor = item.price;
            data_motor_valores.push(valor)
          }

          if (item.category.toLowerCase() == 'rodas') {
            let valor = item.price;
            data_rodas_valores.push(valor)
          } else {
            data_rodas_valores.push(null)
          }

          // if (item.category.toLowerCase() == 'rodas') {
          //   let data_formatada = moment(item.date, 'YYYY-MM-DD').format(
          //     'YYYY-MM-DD'
          //   );
          //   data_dates.push(data_formatada);
          //   let valor = item.price;
          //   data_rodas_valores.push(valor)
          // }

          // switch (item.category.toLowerCase()) {
          //   case 'motor':

          //     break;
          //   case 'rodas':

          //     data_rodas_valores.push(valor);

          //     data_rodas_object = {
          //       name: 'Rodas',
          //       data: data_rodas_valores,
          //       type: 'bar',
          //       color: 'green'
          //     };

          //     data_rodas.push(valor);
          //     break;
          //   case 'suspencao':
          //     data_suspencao.push(valor);
          //     break;
          //   case 'arrefecimento':
          //     data_arrefecimento.push(valor);
          //     break;
          //   case 'peca':
          //     data_pecas.push(valor);
          //     break;
          //   default:
          //     console.log('erro');
          // }


          // item.category.toLowerCase() == 'rodas' ? data_rodas_valores.push(valor) : data_rodas_valores.push(0);

          // data_rodas_object = { name: 'Rodas', data: data_rodas_valores, type: 'bar', color: 'green' };
        });
        data_motor_object = { name: 'Motor', data: data_motor_valores, type: 'bar', color: 'red' };
        data_rodas_object = { name: 'Rodas', data: data_rodas_valores, type: 'bar', color: 'green' };
        console.log(data_dates);
        console.log(data_motor_object);
        console.log(data_rodas_object);
        dataSeries.push(data_motor_object);
        dataSeries.push(data_rodas_object);

        this.chart_manutencao = {
          color: ['#3398DB'],
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow',
            },
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true,
          },
          xAxis: {
            type: 'category',
            data: [...new Set(data_dates)],
          },
          yAxis: {
            type: 'value',
          },
          series: dataSeries,
        };

        // this.chart_manutencao = {
        //   color: ['#3398DB'],
        //   tooltip: {
        //     trigger: 'axis',
        //     axisPointer: {
        //       type: 'shadow'
        //     }
        //   },
        //   grid: {
        //     left: '3%',
        //     right: '4%',
        //     bottom: '3%',
        //     containLabel: true
        //   },
        //   xAxis: [
        //     {
        //       type: 'category',
        //       data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        //       axisTick: {
        //         alignWithLabel: true
        //       }
        //     }
        //   ],
        //   yAxis: [{
        //     type: 'value'
        //   }],
        //   series: [{
        //     name: 'Counters',
        //     type: 'bar',
        //     barWidth: '60%',
        //     data: [50, 70, 30, 60, 120]
        //   }]
        // };
      },
      (err) => {
        console.log(err);
      }
    );
  }

  async buscaDadosCombustivel() {
    this.combustivelService.read_all().subscribe(
      (res) => {
        this.combustivel = res;

        let lst_data: any[] = [];
        this.combustivel.forEach((item) => {
            lst_data.push(item);
        });

        let lst_data_sort = lst_data.sort((a, b) => (a.date > b.date ? 1 : -1));
        let lst_data_x: any[] = [];
        let lst_data_y_ga: any[] = [];
        let lst_data_y_gc: any[] = [];
        let lst_data_y_e: any[] = [];
        let lst_data_y_gv: any[] = [];
        let lst_data_y_d: any[] = [];
        lst_data_sort.forEach((item) => {
          let data_x = moment(item.date, 'YYYY-MM-DD').format('YYYY-MM-DD');
          lst_data_x.push(data_x);
          let data_y = item.price;

          switch (item.gas_type) {
            case 'gasolina_aditivada':
                lst_data_y_ga.push(data_y);
              break;
            case 'gasolina_comum':
                lst_data_y_gc.push(data_y);
              break;
            case 'etanol':
              lst_data_y_e.push(data_y);
              break;
            case 'gnv':
              lst_data_y_gv.push(data_y);
              break;
            case 'diesel':
              lst_data_y_d.push(data_y);
              break;
            default:
              console.log('erro');
          }
        });
        this.chart_gas = {
          grid: { containLabel: true },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow',
            },
          },
          legend: {
            show: true,
            data: ['gasolina_comum', 'gasolina_aditivada', 'etanol', 'gnv', 'diesel'],
          },
          xAxis: {
            type: 'category',
            data: [...new Set(lst_data_x)],
          },
          yAxis: {
            type: 'value',
          },
          series: [
            {
              name: 'gasolina_comum',
              data: lst_data_y_ga,
              type: 'line',
            },
            {
              name: 'gasolina_aditivada',
              data: lst_data_y_gc,
              type: 'line',
            },
            {
              name: 'etanol',
              data: lst_data_y_e,
              type: 'line',
            },
            {
              name: 'gnv',
              data: lst_data_y_gv,
              type: 'line',
            },
            {
              name: 'diesel',
              data: lst_data_y_d,
              type: 'line',
            },
          ],
        };
      },
      (err) => {
        console.log(err);
      }
    );
  }

  async buscaDadosPressaoPneu() {
    this.PressaoService.read_all().subscribe(
      (res) => {
        this.pneu = res;
        let lst_data: any[] = [];
        this.pneu.forEach((item) => {
          lst_data.push(item);
        });
        let lst_data_sort = lst_data.sort((a, b) => (a.date > b.date ? 1 : -1));
        let lst_data_x: any[] = [];
        let lst_data_y_fl: any[] = [];
        let lst_data_y_fr: any[] = [];
        let lst_data_y_bl: any[] = [];
        let lst_data_y_br: any[] = [];
        lst_data_sort.forEach((item) => {
          let data_x = moment(item.date, 'YYYY-MM-DD').format('YYYY-MM-DD');
          lst_data_x.push(data_x);
          let data_y = item.pressure_old;

          switch (item.position) {
            case 'fl':
              lst_data_y_fl.push(data_y);
              break;
            case 'fr':
              lst_data_y_fr.push(data_y);
              break;
            case 'bl':
              lst_data_y_bl.push(data_y);
              break;
            case 'br':
              lst_data_y_br.push(data_y);
              break;
            default:
              console.log('erro');
          }
        });
        this.chart_pneu = {
          grid: { containLabel: true },
          legend: {
            data: [
              'Frente Esquerda',
              'Frente Direita',
              'Traseira Esquerda',
              'Traseira Direita',
            ],
          },
          xAxis: {
            type: 'category',
            data: [...new Set(lst_data_x)],
          },
          yAxis: {
            type: 'value',
          },
          series: [
            {
              name: 'Frente Esquerda',
              data: lst_data_y_fl,
              type: 'line',
            },
            {
              name: 'Frente Direita',
              data: lst_data_y_fr,
              type: 'line',
            },
            {
              name: 'Traseira Esquerda',
              data: lst_data_y_bl,
              type: 'line',
            },
            {
              name: 'Traseira Direita',
              data: lst_data_y_br,
              type: 'line',
            },
          ],
        };
      },
      (err) => {
        console.log(err);
      }
    );
  }

  async buscaDadosKm() {
    this.kmService.read_all().subscribe(
      (res) => {
        this.km = res;
        let lst_data_x: any[] = [];
        let lst_data_y: any[] = [];
        this.km.forEach((item) => {
          let data_x = moment(item.date, 'YYYY-MM-DD').format('YYYY-MM-DD');
          lst_data_x.push(data_x);
          let data_y = item.km;
          lst_data_y.push(data_y);
        });
        this.chart_km = {
          xAxis: {
            type: 'category',
            data: lst_data_x,
          },
          yAxis: {
            type: 'value',
          },
          series: [
            {
              data: lst_data_y,
              type: 'line',
            },
          ],
        };
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
