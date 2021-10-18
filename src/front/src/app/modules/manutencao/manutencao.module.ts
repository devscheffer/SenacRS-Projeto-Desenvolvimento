import { ManutencaoRoutingModule } from './manutencao.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VisualizaManutencaoComponent } from './visualiza-manutencao/visualiza-manutencao.component';
import { CadastraManutencaoComponent } from './cadastra-manutencao/cadastra-manutencao.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    CadastraManutencaoComponent,
    VisualizaManutencaoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ManutencaoRoutingModule
  ]
})
export class ManutencaoModule { }
