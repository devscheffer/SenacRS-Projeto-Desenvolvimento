import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CadastraManutencaoComponent } from './cadastra-manutencao/cadastra-manutencao.component';
import { ManutencaoRoutingModule } from './manutencao.routing.module';
import { SharedModule } from './../../shared/shared.module';
import { VisualizaManutencaoComponent } from './visualiza-manutencao/visualiza-manutencao.component';
import { ViewEditManutencaoComponent } from './view-edit-manutencao/view-edit-manutencao.component';

@NgModule({
  declarations: [
    CadastraManutencaoComponent,
    VisualizaManutencaoComponent,
    ViewEditManutencaoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ManutencaoRoutingModule,
    SharedModule
  ]
})
export class ManutencaoModule { }
