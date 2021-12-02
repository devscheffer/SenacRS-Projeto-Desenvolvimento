import { ButtonPlusComponent } from './button-plus/button-plus.component';
import { DatatableComponent } from './datatable/datatable.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { LoadingComponent } from './loading/loading.component';
import { NgxLoadingModule } from 'ngx-loading';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { VmessageComponent } from './vmessage/vmessage.component';

@NgModule({
  declarations: [
    DatatableComponent,
    LoadingComponent,
    ButtonPlusComponent,
    VmessageComponent
  ],
  imports: [
    CommonModule,
    DataTablesModule,
    FontAwesomeModule,
    NgxLoadingModule.forRoot({})
  ],
  exports: [
    DatatableComponent,
    LoadingComponent,
    ButtonPlusComponent,
    VmessageComponent
  ]
})
export class ComponentsModule { }
