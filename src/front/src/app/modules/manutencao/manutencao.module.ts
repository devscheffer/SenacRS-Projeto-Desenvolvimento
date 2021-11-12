import { ButtonPlusModule } from './../../shared/components/button-plus/button-plus.module';
import { ButtonPlusComponent } from './../../shared/components/button-plus/button-plus.component';
import { SharedModule } from './../../shared/shared.module';
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
    ManutencaoRoutingModule,
    SharedModule,
    ButtonPlusModule
  ]
})
export class ManutencaoModule { }
