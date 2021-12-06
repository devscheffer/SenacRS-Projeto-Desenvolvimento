import { PressaoModel } from 'src/app/shared/models/pressao.model';
import { CombustivelModel } from './../../shared/models/combustivel.model';
import { KmModel } from './../../shared/models/quilometragem.model';
import { QuilometragemService } from './../quilometragem/quilometragem.service';
import { CombustivelService } from './../combustivel/combustivel.service';
import { ManutencaoModel } from './../../shared/models/manutencao.model';
import { ManutencaoService } from './../manutencao/manutencao.service';
import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import * as moment from 'moment';
import { PressaoService } from '../pressao/pressao.service';

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
  chart_manutencao_line: EChartsOption = {};
  initOpts = {
    renderer: 'svg',
    width: 300,
    height: 300,
  };
  semValores: boolean = true;

  constructor(
    private manutencaoService: ManutencaoService,
    private combustivelService: CombustivelService,
    private pressaoService: PressaoService,
    private kmService: QuilometragemService
  ) {}

  async ngOnInit() {
    this.loading = true;
    await this.buscaDadosManutencoes();
    await this.buscaDadosManutencoesLine();
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
        res.length > 0 ? this.semValores = false : null;
        let dadosNomes: any[] = [];
        let dadosManutencao: any[] = [];

        let precoMotor: number = 0;
        let motorList = res.filter(item => item.category.toLowerCase() === 'motor');
        motorList.forEach(item => {
          precoMotor += item.price;
        })
        if (precoMotor > 0) {
          dadosNomes.push('Motor');
          dadosManutencao.push({ value: precoMotor, itemStyle: { color: '#5a78db' }, label: { show: true, position: 'inside' } });
        }

        let precoRodas: number = 0;
        let rodasList = res.filter(item => item.category.toLowerCase() === 'rodas');
        rodasList.forEach(item => {
          precoRodas += item.price;
        })
        if (precoRodas > 0) {
          dadosNomes.push('Rodas');
          dadosManutencao.push({ value: precoRodas, itemStyle: { color: '#269120' }, label: { show: true, position: 'inside' } });
        }

        let precoSuspencao: number = 0;
        let suspencaoList = res.filter(item => item.category.toLowerCase() === 'suspencao');
        suspencaoList.forEach(item => {
          precoSuspencao += item.price;
        })
        if (precoSuspencao > 0) {
          dadosNomes.push('Suspenção');
          dadosManutencao.push({ value: precoSuspencao, itemStyle: { color: '#94155b' }, label: { show: true, position: 'inside' } });
        }

        let precoArrefecimento: number = 0;
        let arrefecimentoList = res.filter(item => item.category.toLowerCase() === 'arrefecimento');
        arrefecimentoList.forEach(item => {
          precoArrefecimento += item.price;
        })
        if (precoArrefecimento > 0) {
          dadosNomes.push('Arrefecimento');
          dadosManutencao.push({ value: precoArrefecimento, itemStyle: { color: '#a32f24' }, label: { show: true, position: 'inside' }  });
        }

        let precoPecas: number = 0;
        let pecasList = res.filter(item => item.category.toLowerCase() === 'peca');
        pecasList.forEach(item => {
          precoPecas += item.price;
        })
        if (precoPecas > 0) {
          dadosNomes.push('Peças');
          dadosManutencao.push({ value: precoPecas, itemStyle: { color: '#721c87' },  label: { show: true, position: 'inside' }  });
        }

        this.chart_manutencao = {
          title: {
            text: 'Totais Manutenções',
            subtext: 'Valor em Reais',
            subtextStyle: {
              color: '#FFFFFF'
            },
            textStyle: { color: '#FFFFFF' },
            left: 'center',
          },
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
            data: [...new Set(dadosNomes)],
            show: false
          },
          yAxis: {
            type: 'value',
            axisLabel: {
                color: '#FFFFFF',
                formatter: '{value} BRL'
            }
          },
          series: [
            {
              name: 'Manutenção',
              data: dadosManutencao,
              type: 'bar',
            },
          ],
        };
      },
      (err) => {
        console.log(err);
      }
    );
  }

  async buscaDadosManutencoesLine() {
    this.manutencaoService.read_all().subscribe(
      (res) => {
        res.length > 0 ? this.semValores = false : null;
        this.manutencoes = res;
        let lst_data: any[] = [];
        this.manutencoes.forEach((item) => {
          lst_data.push(item);
        });
        // data.push(dataSuspencao);

        let lst_data_sort = lst_data.sort((a, b) => (a.date > b.date ? 1 : -1));
        let lst_data_x: any[] = [];
        let lst_data_y_m: any[] = [];
        let lst_data_y_r: any[] = [];
        let lst_data_y_s: any[] = [];
        let lst_data_y_a: any[] = [];
        let lst_data_y_p: any[] = [];
        lst_data_sort.forEach((item) => {
          let data_x = moment(item.date, 'YYYY-MM-DD').format('YYYY-MM-DD');
          lst_data_x.push(data_x);
          let data_y = item.price;
          switch (item.category) {
            case 'Motor':
              lst_data_y_m.push(data_y);
              break;
            case 'Rodas':
              lst_data_y_r.push(data_y);
              break;
            case 'Suspencao':
              lst_data_y_s.push(data_y);
              break;
            case 'Arrefecimento':
              lst_data_y_a.push(data_y);
              break;
            case 'peca':
              lst_data_y_p.push(data_y);
              break;
            default:
              console.log('erro');
          }
        });
        this.chart_manutencao_line = {
          title: {
            text: 'Detalhes Manutenções',
            subtext: 'Valor em Reais',
            subtextStyle: {
              color: '#FFFFFF'
            },
            textStyle: { color: '#FFFFFF' },
            left: 'center',
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow',
            },
          },
          grid: { containLabel: true },
          legend: {
            data: ['Motor', 'Rodas', 'Suspencao', 'Arrefecimento', 'peca'],
            backgroundColor: '#ccc',
            bottom: 0,
          },
          xAxis: {
            type: 'category',
            data: [...new Set(lst_data_x)],
            axisLabel: {
              color: '#FFFFFF',
            }
          },
          yAxis: {
            type: 'value',
            axisLabel: {
              color: '#FFFFFF',
              formatter: '{value} BRL/L'
            }
          },
          series: [
            {
              name: 'Motor',
              data: lst_data_y_m,
              type: 'line',
            },
            {
              name: 'Rodas',
              data: lst_data_y_r,
              type: 'line',
            },
            {
              name: 'Suspencao',
              data: lst_data_y_s,
              type: 'line',
            },
            {
              name: 'Arrefecimento',
              data: lst_data_y_a,
              type: 'line',
            },
            {
              name: 'peca',
              data: lst_data_y_p,
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

  async buscaDadosCombustivel() {
    this.combustivelService.read_all().subscribe(
      (res) => {
        res.length > 0 ? this.semValores = false : null;
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
          title: {
            text: 'Combustível',
            subtext: 'Preço por litro (R$/L)',
            subtextStyle: {
              color: '#FFFFFF'
            },
            textStyle: { color: '#FFFFFF' },
            left: 'center',
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow',
            },
          },
          grid: { containLabel: true },
          legend: {
            data: [
              'gasolina_comum',
              'gasolina_aditivada',
              'etanol',
              'gnv',
              'diesel',
            ],
            backgroundColor: '#FFFFFF',
            bottom: 0,
          },
          xAxis: {
            type: 'category',
            data: [...new Set(lst_data_x)],
            axisLabel: {
              color: '#FFFFFF',
            }
          },
          yAxis: {
            type: 'value',
            axisLabel: {
              color: '#FFFFFF',
              formatter: '{value} BRL/L'
            }
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
    this.pressaoService.read_all().subscribe(
      (res) => {
        res.length > 0 ? this.semValores = false : null;

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
          title: {
            text: 'Pressão dos Pneus',
            subtext: 'Valor em PSI',
            subtextStyle: {
              color: '#FFFFFF'
            },
            textStyle: { color: '#FFFFFF' },
            left: 'center',
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow',
            },
          },
          grid: { containLabel: true },
          legend: {
            data: [
              'Frente Esquerda',
              'Frente Direita',
              'Traseira Esquerda',
              'Traseira Direita',
            ],
            backgroundColor: '#FFFFFF',
            bottom: 0,
          },
          xAxis: {
            type: 'category',
            data: [...new Set(lst_data_x)],
            axisLabel: {
              color: '#FFFFFF',
            }
          },
          yAxis: {
            type: 'value',
            axisLabel: {
              color: '#FFFFFF',
              formatter: '{value} PSI'
            }
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
        res.length > 0 ? this.semValores = false : null;
        this.km = res;
        let lst_data: any[] = [];
        this.km.forEach((item) => {
          lst_data.push(item);
        });
        let lst_data_sort = lst_data.sort((a, b) => (a.date > b.date ? 1 : -1));
        let lst_data_x: any[] = [];
        let lst_data_y: any[] = [];
        lst_data_sort.forEach((item) => {
          let data_x = moment(item.date, 'YYYY-MM-DD').format('YYYY-MM-DD');
          lst_data_x.push(data_x);
          let data_y = item.km / 1000;
          lst_data_y.push(data_y);
        });
        this.chart_km = {
          title: {
            text: 'Quilometragem',
            subtext: 'Valor em km',
            subtextStyle: {
              color: '#FFFFFF'
            },
            textStyle: { color: '#FFFFFF' },
            left: 'center',
          },
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
            data: lst_data_x,
            axisLabel: {
              color: '#FFFFFF',
            }
          },
          yAxis: {
            type: 'value',
            axisLabel: {
              color: '#FFFFFF',
              formatter: '{value}k km'
            }
          },
          series: [
            {
              data: lst_data_y,
              type: 'line',
              areaStyle: {},
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
