import { LoginComponent } from './core/components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Tela de Login'
    }
  },
	{
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./modules/modules.module').then(m => m.ModulesModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
