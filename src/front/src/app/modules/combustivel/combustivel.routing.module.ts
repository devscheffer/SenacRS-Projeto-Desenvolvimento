import { VisualizaCombustivelComponent } from './visualiza-combustivel/visualiza-combustivel.component';
import { CadastraCombustivelComponent } from './cadastra-combustivel/cadastra-combustivel.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewEditCombustivelComponent } from './view-edit-combustivel/view-edit-combustivel.component';

const routes : Routes = [
	{
    path: 'cadastra',
    component: CadastraCombustivelComponent,
    data: { title: 'Cadastro de combustível' }
  },
  {
    path: 'registros',
    component: VisualizaCombustivelComponent,
    data: { title: 'Registros de Combustível'}
  },
  {
    path: 'visualiza/:id',
    component: ViewEditCombustivelComponent,
    data: {
      titleView: 'Visualiza Combustível',
      titleEdit: 'Edita Combustível'
    }
  },
]

@NgModule({
	imports: [ RouterModule.forChild(routes),],
	exports: [ RouterModule ]
})
export class CombustivelRoutingModule { }
