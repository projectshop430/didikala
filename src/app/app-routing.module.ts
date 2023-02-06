import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Page404Component } from './User/Error/page404/page404.component';
import { FootersignComponent } from './User/Footer/Sign/footersign/footersign.component';
import { HeadersignComponent } from './User/Header/Sign/headersign/headersign.component';
import { LoginComponent } from './User/Login/login/login.component';
import { PasswordchangeComponent } from './User/PasswordsChenge/passwordchange/passwordchange.component';
import { RegisterComponent } from './User/Reigister/register/register.component';
import { CartemptyComponent } from './User/cartempty/cartempty/cartempty.component';
import { VerifyphonenumberComponent } from './User/verifyphonenumber/verifyphonenumber/verifyphonenumber.component';
import { ShopcompleteComponent } from './shop/shopcomplete/shopcomplete.component';
import { ShopsingleproductComponent } from './shop/shopsingleproduct/shopsingleproduct.component';
import { ShopsingleproductinfomationComponent } from './shop/shopsingleproductinfomation/shopsingleproductinfomation.component';
import { ShopsingleproductQusComponent } from './shop/shopcomplete/shopsingleproduct-qus/shopsingleproduct-qus.component';
import { ShopporseshComponent } from './shop/shopporsesh/shopporsesh.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'FormRegister' , component:RegisterComponent},
  {path:'FormLogin' , component:LoginComponent,
  children:[
    {path:'Headersign',component:HeadersignComponent},
    {path:'Footersign',component:FootersignComponent},
  ]},

  {path:'FormPasswordschange' , component:PasswordchangeComponent},

  {path:'cartempty',component:CartemptyComponent},
  {path:'verifyphonenumber',component:VerifyphonenumberComponent},
  {path:'shopcomplete',component:ShopcompleteComponent},
  {path:'shopsingleproduct',component:ShopsingleproductComponent,
  children:[
    {path:'info',component:ShopsingleproductinfomationComponent},
    {path:'porshesh',component:ShopporseshComponent},
    {path:'',redirectTo:'info',pathMatch:'full'}

  ]
  },


  {path:'**',component:Page404Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
