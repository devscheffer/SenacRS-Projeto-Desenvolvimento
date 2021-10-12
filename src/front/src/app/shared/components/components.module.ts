import { DatatableComponent } from './datatable/datatable.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';

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
