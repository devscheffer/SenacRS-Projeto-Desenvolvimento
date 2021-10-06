import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastraPressaoPneuComponent } from './cadastra-pressao-pneu/cadastra-pressao-pneu.component';
import { PneuRoutingModule } from './pneu.routing.module';



@NgModule({
  declarations: [
    CadastraPressaoPneuComponent
  ],
  imports: [
    CommonModule,
    PneuRoutingModule
  ]
})
export class PneuModule { }
