import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-verifyphonenumber',
  templateUrl: './verifyphonenumber.component.html',
  styleUrls: ['./verifyphonenumber.component.css']
})
export class VerifyphonenumberComponent  {

confirmationnumber:string=" تایید شماره" ;
descriptionconfirimation1:string ='  کد تایید ارسال گردید';
descriptionconfirimation2:string='برای شماره همراه';
descriptionphonnumber!:number;
editnumber:string="ویرایش شماره";
label:string="کد تایید را وارد کنید";
// ----------------------------------------------//

}
