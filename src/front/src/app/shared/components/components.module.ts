import { DatatableComponent } from './datatable/datatable.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { ButtonPlusComponent } from './button-plus/button-plus.component';

@NgModule({
  declarations: [
    DatatableComponent
  ],
  imports: [
    CommonModule,
    DataTablesModule
  ],
  exports: [
    DatatableComponent
  ]
})
export class ComponentsModule { }
