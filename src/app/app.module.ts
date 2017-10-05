import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IdentityComponent } from './components/identity/identity.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { MrHomeComponent } from './components/mr-home/mr-home.component';
import { CreateReportSetComponent } from './components/createReportSet/create-report-set/create-report-set.component';
import { SelectPtComponent } from './components/select-pt/select-pt.component';


@NgModule({
  declarations: [
    AppComponent,
    IdentityComponent,
    HeaderComponent,
    LoginComponent,
    FooterComponent,
    MrHomeComponent,
    CreateReportSetComponent,
    SelectPtComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
