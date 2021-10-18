import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CombustivelRoutingModule } from './combustivel.routing.module';
import { VisualizaCombustivelComponent } from './visualiza-combustivel/visualiza-combustivel.component';
import { CadastraCombustivelComponent } from './cadastra-combustivel/cadastra-combustivel.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    CadastraCombustivelComponent,
    VisualizaCombustivelComponent
  ],
  imports: [
    CommonModule,
    CombustivelRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CombustivelModule { }
