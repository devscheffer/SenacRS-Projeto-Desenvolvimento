import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastraPressaoPneuComponent } from './cadastra-pressao-pneu/cadastra-pressao-pneu.component';
import { PneuRoutingModule } from './pneu.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CadastraPressaoPneuComponent
  ],
  imports: [
    CommonModule,
    PneuRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PneuModule { }
