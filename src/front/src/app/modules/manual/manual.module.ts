import { ManualRoutingModule } from './manual.routing.module';
import { ManualComponent } from './manual.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [ManualComponent],
  imports: [
    CommonModule,
    ManualRoutingModule
  ]
})
export class ManualModule { }
