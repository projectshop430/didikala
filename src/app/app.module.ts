import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadersignComponent } from './User/Header/Sign/headersign/headersign.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './User/Login/login/login.component';
import { RegisterComponent } from './User/Reigister/register/register.component';
import { FootersignComponent } from './User/Footer/Sign/footersign/footersign.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    HeadersignComponent,
    FootersignComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
