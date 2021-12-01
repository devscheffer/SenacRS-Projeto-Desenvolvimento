import { LoginService } from './services/login/login.service';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptor } from './services/login/request.interceptor';
import { FooterComponent } from './components/footer/footer.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    FooterComponent,
    CadastroComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    FontAwesomeModule,
    SharedModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  providers: [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: RequestInterceptor,
        multi: true
    }
]
})
export class CoreModule { }
