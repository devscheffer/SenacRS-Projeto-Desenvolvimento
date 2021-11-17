import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { QuilometragemRoutingModule } from './quilometragem.routing.module';
import { VisualizaQuilometragemComponent } from './visualiza-quilometragem/visualiza-quilometragem.component';
import { CadastraQuilometragemComponent } from './cadastra-quilometragem/cadastra-quilometragem.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    CadastraQuilometragemComponent,
    VisualizaQuilometragemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    QuilometragemRoutingModule,
    SharedModule
  ]
})
export class QuilometragemModule { }
