import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ManutencaoRoutingModule } from './manutencao.routing.module';
import { VisualizaManutencaoComponent } from './visualiza-manutencao/visualiza-manutencao.component';
import { CadastraManutencaoComponent } from './cadastra-manutencao/cadastra-manutencao.component';
import { SharedModule } from './../../shared/shared.module';

@NgModule({
  declarations: [
    CadastraManutencaoComponent,
    VisualizaManutencaoComponent
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
