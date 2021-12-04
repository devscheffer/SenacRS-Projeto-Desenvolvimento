import { VisualizaManutencaoComponent } from './visualiza-manutencao/visualiza-manutencao.component';
import { CadastraManutencaoComponent } from './cadastra-manutencao/cadastra-manutencao.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewEditManutencaoComponent } from './view-edit-manutencao/view-edit-manutencao.component';

const routes : Routes = [
	{
    path: 'cadastra',
    component: CadastraManutencaoComponent,
    data: { title: 'Cadastro de manutenção'}
  },
	{
    path: 'registros',
    component: VisualizaManutencaoComponent,
    data: { title: 'Registros de Manutenção'}
  },
  {
    path: 'visualiza/:id',
    component: ViewEditManutencaoComponent,
    data: {
      titleView: 'Visualiza Manutenção',
      titleEdit: 'Edita Manutenção'
    }
  },
]

@NgModule({
	imports: [ RouterModule.forChild(routes),],
	exports: [ RouterModule ]
})

export class ManutencaoRoutingModule {

}
