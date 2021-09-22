import { RouterModule } from '@angular/router';
import { MenuPrincipalModule } from './modules/menu-principal/menu-principal.module';
import { HomeComponent } from './core/components/home/home.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './core/components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { HeaderComponent } from './core/components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CollapseModule } from 'ngx-bootstrap/collapse';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MenuPrincipalModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  exports: [HeaderComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
