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
    path: 'visualiza',
    component: VisualizaPressaoComponent,
    data: { title: 'Visualiza pressão do pneu' },
  },
  {
    path: 'visualiza/:id',
    component: ViewEditPressaoComponent,
    data: { title: 'Visualiza Pressão do pneu' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PressaoRoutingModule {}
