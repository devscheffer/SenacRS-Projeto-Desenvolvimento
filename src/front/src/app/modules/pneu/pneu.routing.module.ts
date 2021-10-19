import { VisualizaPressaoPneuComponent } from './visualiza-pressao-pneu/visualiza-pressao-pneu.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastraPressaoPneuComponent } from './cadastra-pressao-pneu/cadastra-pressao-pneu.component';

const routes : Routes = [
	{
    path: 'cadastra',
    component: CadastraPressaoPneuComponent,
    data: { title: 'Cadastro de pressão do pneu'}
  },
	{
    path: 'visualiza',
    component: VisualizaPressaoPneuComponent,
    data: { title: 'Visualiza pressão do pneu'}
  }
]

@NgModule({
	imports: [ RouterModule.forChild(routes),],
	exports: [ RouterModule ]
})

export class PneuRoutingModule {

}
