import { ComponentsModule } from './components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ComponentsModule,
    MatSliderModule
  ],
  exports: [
    ComponentsModule,
    MatSliderModule
  ]
})
export class SharedModule { }
