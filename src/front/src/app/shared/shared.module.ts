import { ComponentsModule } from './components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    ComponentsModule
  ]
})
export class SharedModule { }
