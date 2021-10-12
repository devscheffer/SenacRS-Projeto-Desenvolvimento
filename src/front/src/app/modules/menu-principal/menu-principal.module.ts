import { SharedModule } from './../../shared/shared.module';
import { MenuPrincipalRoutingModule } from './menu-principal.routing.module';
import { MenuPrincipalComponent } from './menu-principal.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    MenuPrincipalComponent
  ],
  imports: [
    CommonModule,
    MenuPrincipalRoutingModule,
    SharedModule
  ]
})
export class MenuPrincipalModule { }
