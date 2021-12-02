import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CadastraPressaoComponent } from './cadastra-pressao/cadastra-pressao.component';
import { PressaoRoutingModule } from './pressao.routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ViewEditPressaoComponent } from './view-edit-pressao/view-edit-pressao.component';
import { VisualizaPressaoComponent } from './visualiza-pressao/visualiza-pressao.component';

@NgModule({
  declarations: [
    CadastraPressaoComponent,
    VisualizaPressaoComponent,
    ViewEditPressaoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PressaoRoutingModule,
    SharedModule,
  ],
})
export class PressaoModule {}
