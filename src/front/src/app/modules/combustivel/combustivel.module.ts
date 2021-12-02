import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CombustivelRoutingModule } from './combustivel.routing.module';
import { VisualizaCombustivelComponent } from './visualiza-combustivel/visualiza-combustivel.component';
import { CadastraCombustivelComponent } from './cadastra-combustivel/cadastra-combustivel.component';
import { SharedModule } from './../../shared/shared.module';
import { ViewEditCombustivelComponent } from './view-edit-combustivel/view-edit-combustivel.component';

@NgModule({
  declarations: [
    CadastraCombustivelComponent,
    VisualizaCombustivelComponent,
    ViewEditCombustivelComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CombustivelRoutingModule,
    SharedModule
  ]
})
export class CombustivelModule { }
