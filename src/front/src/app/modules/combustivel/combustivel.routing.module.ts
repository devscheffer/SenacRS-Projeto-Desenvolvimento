import { VisualizaCombustivelComponent } from './visualiza-combustivel/visualiza-combustivel.component';
import { CadastraCombustivelComponent } from './cadastra-combustivel/cadastra-combustivel.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [
	{
    path: 'cadastra',
    component: CadastraCombustivelComponent,
    data: { title: 'Cadastro de combustível' }
  },
  {
    path: 'visualiza',
    component: VisualizaCombustivelComponent,
    data: { title: 'Visualização do combustível'}
  }
]

@NgModule({
	imports: [ RouterModule.forChild(routes),],
	exports: [ RouterModule ]
})
export class CombustivelRoutingModule { }
