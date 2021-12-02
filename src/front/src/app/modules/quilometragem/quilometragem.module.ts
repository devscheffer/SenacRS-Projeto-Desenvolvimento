import { CadastraQuilometragemComponent } from './cadastra-quilometragem/cadastra-quilometragem.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { QuilometragemRoutingModule } from './quilometragem.routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ViewEditQuilometragemComponent } from './view-edit-quilometragem/view-edit-quilometragem.component';
import { VisualizaQuilometragemComponent } from './visualiza-quilometragem/visualiza-quilometragem.component';

@NgModule({
  declarations: [
    CadastraQuilometragemComponent,
    VisualizaQuilometragemComponent,
    ViewEditQuilometragemComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    QuilometragemRoutingModule,
    SharedModule,
  ],
})
export class QuilometragemModule {}
