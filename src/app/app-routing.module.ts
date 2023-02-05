import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Page404Component } from './User/Error/page404/page404.component';
import { FootersignComponent } from './User/Footer/Sign/footersign/footersign.component';
import { HeadersignComponent } from './User/Header/Sign/headersign/headersign.component';
import { LoginComponent } from './User/Login/login/login.component';
import { RegisterComponent } from './User/Reigister/register/register.component';
import { CartemptyComponent } from './User/cartempty/cartempty/cartempty.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'FormRegister' , component:RegisterComponent},
  {path:'FormLogin' , component:LoginComponent,
  children:[
    {path:'Headersign',component:HeadersignComponent},
    {path:'Footersign',component:FootersignComponent},
  ]},
    {path:'cartempty',component:CartemptyComponent},
  {path:'**',component:Page404Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
