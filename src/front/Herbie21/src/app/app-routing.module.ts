import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';

const routes: Routes = [
	{
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'menu-principal',
        pathMatch: 'full'
      },
      {
        path: 'menu-principal',
        data: {
          title: 'Menu Principal'
        },
        loadChildren: () => import('./modules/menu-principal/menu-principal.module').then(m => m.MenuPrincipalModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
