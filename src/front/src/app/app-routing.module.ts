import { LoginComponent } from './core/components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./core/components/login/login.module').then(m => m.LoginModule),
    data: {
      title: 'Tela de Login'
    }
  },
	{
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        data: {
          title: 'Menu Principal'
        },
        loadChildren: () => import('./modules/menu-principal/menu-principal.module').then(m => m.MenuPrincipalModule)
      },
      {
        path: 'pneu',
        data: {
          title: 'Pneu'
        },
        loadChildren: () => import('./modules/pneu/pneu.module').then(m => m.PneuModule)
      },
      {
        path: 'combustivel',
        data: {
          title: 'Combustivel'
        },
        loadChildren: () => import('./modules/combustivel/combustivel.module').then(m => m.CombustivelModule)
      },
      {
        path: 'manutencao',
        data: {
          title: 'Manutenção'
        },
        loadChildren: () => import('./modules/manutencao/manutencao.module').then(m => m.ManutencaoModule)
      },
      {
        path: 'quilometragem',
        data: {
          title: 'Quilometragem'
        },
        loadChildren: () => import('./modules/quilometragem/quilometragem.module').then(m => m.QuilometragemModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
