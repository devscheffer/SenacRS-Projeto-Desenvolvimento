import { ButtonPlusModule } from './../../shared/components/button-plus/button-plus.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastraPressaoPneuComponent } from './cadastra-pressao-pneu/cadastra-pressao-pneu.component';
import { PneuRoutingModule } from './pneu.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VisualizaPressaoPneuComponent } from './visualiza-pressao-pneu/visualiza-pressao-pneu.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    CadastraPressaoPneuComponent,
    VisualizaPressaoPneuComponent
  ],
  imports: [
    CommonModule,
    PneuRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    ButtonPlusModule
  ]
})
export class PneuModule { }
