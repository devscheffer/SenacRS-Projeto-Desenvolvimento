import { ComponentsModule } from './components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';


const materialAngular = [
  MatSliderModule,
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ComponentsModule,
    ...materialAngular
  ],
  exports: [
    ComponentsModule,
    ...materialAngular
  ]
})
export class SharedModule { }
