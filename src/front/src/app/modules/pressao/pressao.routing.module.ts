import { CadastraPressaoComponent } from './cadastra-pressao/cadastra-pressao.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewEditPressaoComponent } from './view-edit-pressao/view-edit-pressao.component';
import { VisualizaPressaoComponent } from './visualiza-pressao/visualiza-pressao.component';
const routes: Routes = [
  {
    path: 'cadastra',
    component: CadastraPressaoComponent,
    data: { title: 'Cadastro de pressão do pneu' },
  },
  {
    path: 'registros',
    component: VisualizaPressaoComponent,
    data: { title: 'Registros de Pressão do Pneu' },
  },
  {
    path: 'visualiza/:id',
    component: ViewEditPressaoComponent,
    data: {
      titleView: 'Visualiza Pressão do Pneu',
      titleEdit: 'Edita Pressão do Pneu'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PressaoRoutingModule {}
