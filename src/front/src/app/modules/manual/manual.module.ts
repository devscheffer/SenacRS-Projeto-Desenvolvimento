import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManualRoutingModule } from './manual.routing.module';
import { ManualComponent } from './manual.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ ManualComponent ],
  imports: [
    CommonModule,
    ManualRoutingModule,
    SharedModule
  ]
})
export class ManualModule { }
