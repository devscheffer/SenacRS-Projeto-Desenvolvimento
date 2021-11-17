import { PneuModel } from 'src/app/shared/models/pneu.model';
import { CombustivelModel } from './../../shared/models/combustivel.model';
import { KmModel } from './../../shared/models/quilometragem.model';
import { QuilometragemService } from './../quilometragem/quilometragem.service';
import { PneuService } from './../pneu/pneu.service';
import { CombustivelService } from './../combustivel/combustivel.service';
import { ManutencaoModel } from './../../shared/models/manutencao.model';
import { ManutencaoService } from './../manutencao/manutencao.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public loading: boolean = false;
  dataSourceManutencao: Object = {};
  dataSourceCombustivel: Object = {};
  dataSourcePneu: Object = {};
  dataSourceKm: Object = {};
  manutencoes: ManutencaoModel[] = [];
  combustivel: CombustivelModel[] = [];
  pneu: PneuModel[] = [];
  km: KmModel[] = [];

  constructor(
    private manutencaoService: ManutencaoService,
    private combustivelService: CombustivelService,
    private pneuService: PneuService,
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
      res => {
        this.manutencoes = res;
        let data: any[] = [];
        this.manutencoes.forEach(item => {
          let dataObject = { label: item.category , value: item.price};
          data.push(dataObject);
        });

        this.dataSourceManutencao = {
          chart: {
            caption: 'Gráfico de Manutenções',
            // subCaption: 'In MMbbl = One Million barrels',
            // xAxisName: 'Country',
            yAxisName: 'Reais (R$)',
            numberSuffix: 'R$',
            theme: 'fusion'
          },
          data
        };

      }, err => {
        console.log(err);
      }
    )
  }

  async buscaDadosCombustivel() {
    this.combustivelService.read_all().subscribe(
      res => {
        this.combustivel = res;
        let data: any[] = [];
        this.combustivel.forEach(item => {
          let dataObject = { label: item.gas_type , value: item.price};
          data.push(dataObject);
        });

        this.dataSourceCombustivel = {
          chart: {
            caption: 'Gráfico de Combustível',
            // subCaption: 'In MMbbl = One Million barrels',
            // xAxisName: 'Country',
            yAxisName: 'Reais (R$)',
            numberSuffix: 'R$',
            theme: 'fusion'
          },
          data
        };

      }, err => {
        console.log(err);
      }
    )
  }

  async buscaDadosPressaoPneu() {
    this.pneuService.read_all().subscribe(
      res => {
        this.pneu = res;
        let data: any[] = [];
        this.pneu.forEach(item => {
          let dataObject = { label: item.position , value: item.pressure_new};
          data.push(dataObject);
        });

        this.dataSourcePneu = {
          chart: {
            caption: 'Gráfico de Pressão do Pneu',
            // subCaption: 'In MMbbl = One Million barrels',
            // xAxisName: 'Country',
            // yAxisName: 'Reais (R$)',
            numberSuffix: '',
            theme: 'fusion'
          },
          data
        };

      }, err => {
        console.log(err);
      }
    )
  }

  async buscaDadosKm() {
    this.kmService.read_all().subscribe(
      res => {
        this.km = res;
        let data: any[] = [];
        this.km.forEach(item => {
          let dataObject = { label: item.observation , value: item.km};
          data.push(dataObject);
        });

        this.dataSourceKm = {
          chart: {
            caption: 'Gráfico de Quilometragem',
            // subCaption: 'In MMbbl = One Million barrels',
            // xAxisName: 'Country',
            // yAxisName: 'Reais (R$)',
            numberSuffix: 'km',
            theme: 'fusion'
          },
          data
        };

      }, err => {
        console.log(err);
      }
    )
  }
}
