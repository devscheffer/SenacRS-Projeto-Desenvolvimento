import { ButtonPlusModule } from './../../shared/components/button-plus/button-plus.module';
import { VisualizaQuilometragemComponent } from './visualiza-quilometragem/visualiza-quilometragem.component';
import { QuilometragemRoutingModule } from './quilometragem.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastraQuilometragemComponent } from './cadastra-quilometragem/cadastra-quilometragem.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    CadastraQuilometragemComponent,
    VisualizaQuilometragemComponent
  ],
  imports: [
    CommonModule,
    QuilometragemRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    ButtonPlusModule
  ]
})
export class QuilometragemModule { }
