import { ViewEditQuilometragemComponent } from './view-edit-quilometragem/view-edit-quilometragem.component';
import { VisualizaQuilometragemComponent } from './visualiza-quilometragem/visualiza-quilometragem.component';
import { CadastraQuilometragemComponent } from './cadastra-quilometragem/cadastra-quilometragem.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes : Routes = [
	{
    path: 'cadastra',
    component: CadastraQuilometragemComponent,
    data: { title: 'Cadastra Quilometragem' }
  },
	{
    path: 'visualiza',
    component: VisualizaQuilometragemComponent,
    data: { title: 'Registros de Quilometragem' }
  },
	{
    path: 'visualiza/:id',
    component: ViewEditQuilometragemComponent,
    data: { title: 'Visualiza Quilometragem' }
  }
]

@NgModule({
	imports: [ RouterModule.forChild(routes),],
	exports: [ RouterModule ]
})

export class QuilometragemRoutingModule {

}
