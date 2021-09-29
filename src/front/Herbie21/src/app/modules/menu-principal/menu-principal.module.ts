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
  ]
})
export class MenuPrincipalModule { }
