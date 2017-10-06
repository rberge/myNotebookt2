import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IdentityComponent } from './features/identity/identity.component';
import { HeaderComponent } from './features/shared/header/header.component';
import { LoginComponent } from './features/login/login.component';
import { FooterComponent } from './features/shared/footer/footer.component';
import { MrHomeComponent } from './features/Start/mr-home.component';
import { CreateReportSetComponent } from './features/createReportSet/create-report-set/create-report-set.component';
import { SelectPtComponent } from './features/createReport/select-pt/select-pt.component';


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
