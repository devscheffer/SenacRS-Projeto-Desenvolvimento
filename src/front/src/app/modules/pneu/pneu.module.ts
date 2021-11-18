import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PneuRoutingModule } from './pneu.routing.module';
import { VisualizaPressaoPneuComponent } from './visualiza-pressao-pneu/visualiza-pressao-pneu.component';
import { CadastraPressaoPneuComponent } from './cadastra-pressao-pneu/cadastra-pressao-pneu.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [
    CadastraPressaoPneuComponent,
    VisualizaPressaoPneuComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PneuRoutingModule,
    SharedModule,
    MatSliderModule
  ]
})
export class PneuModule { }
