import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes : Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },
  {
    path: 'pneu',
    data: {
      title: 'Pneu'
    },
    loadChildren: () => import('./pneu/pneu.module').then(m => m.PneuModule)
  },
  {
    path: 'combustivel',
    data: {
      title: 'Combustivel'
    },
    loadChildren: () => import('./combustivel/combustivel.module').then(m => m.CombustivelModule)
  },
  {
    path: 'manutencao',
    data: {
      title: 'Manutenção'
    },
    loadChildren: () => import('./manutencao/manutencao.module').then(m => m.ManutencaoModule)
  },
  {
    path: 'quilometragem',
    data: {
      title: 'Quilometragem'
    },
    loadChildren: () => import('./quilometragem/quilometragem.module').then(m => m.QuilometragemModule)
  },
  {
    path: 'manual',
    data: {
      title: 'Manual'
    },
    loadChildren: () => import('./manual/manual.module').then(m => m.ManualModule)
  },
  {
    path: 'dashboard',
    data: {
      title: 'Dashboard'
    },
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
]

@NgModule({
	imports: [ RouterModule.forChild(routes),],
	exports: [ RouterModule ]
})

export class ModulesRoutingModule {

}
