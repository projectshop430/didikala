import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations' ;
import { NgxUiLoaderModule } from 'ngx-ui-loader';

import { AppComponent } from './app.component';
import { HeadersignComponent } from './User/Header/Sign/headersign/headersign.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './User/Login/login/login.component';
import { RegisterComponent } from './User/Reigister/register/register.component';
import { FootersignComponent } from './User/Footer/Sign/footersign/footersign.component';
import { MenuProjectComponent } from './Menu/menu-project/menu-project.component';
import { Page404Component } from './User/Error/page404/page404.component';
import { AdvertisingpageComponent } from './User/Advertising/advertisingpage/advertisingpage.component';
import { AccountingComponent } from './User/Header/Page/account/accounting/accounting.component';
import { CartListComponent } from './User/Header/Page/Cart/cart-list/cart-list.component';
import { MenuBarComponent } from './User/Header/Page/Menu/menu-bar/menu-bar.component';
import { SearchingComponent } from './User/Header/Page/search/searching/searching.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    HeadersignComponent,
    FootersignComponent,
    MenuProjectComponent,
    Page404Component,
    AdvertisingpageComponent,
    AccountingComponent,
    CartListComponent,
    MenuBarComponent,
    SearchingComponent,
  ],
   imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxUiLoaderModule,

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
