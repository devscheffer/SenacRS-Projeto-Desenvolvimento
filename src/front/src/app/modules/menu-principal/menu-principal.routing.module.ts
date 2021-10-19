import { MenuPrincipalComponent } from './menu-principal.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes : Routes = [
	{
    path: '',
    component: MenuPrincipalComponent,
    data: { title: 'Menu Principal' }
  }
]

@NgModule({
	imports: [ RouterModule.forChild(routes),],
	exports: [ RouterModule ]
})

export class MenuPrincipalRoutingModule {

}
