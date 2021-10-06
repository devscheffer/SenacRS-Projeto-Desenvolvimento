import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastraPressaoPneuComponent } from './cadastra-pressao-pneu/cadastra-pressao-pneu.component';

const routes : Routes = [
	{ path: '', component: CadastraPressaoPneuComponent}
]

@NgModule({
	imports: [ RouterModule.forChild(routes),],
	exports: [ RouterModule ]
})

export class PneuRoutingModule {

}
