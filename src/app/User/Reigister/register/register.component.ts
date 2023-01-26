import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  implements OnInit {
  myFormGroup! : FormGroup;
  formTemplate = [
    {
      "type":"textBox",
      "label":"ایمیل",
      "placeholders":"ایمیل یا شماره موبایل خود را وارد نمایید",
      "icon":"mdi mdi-account-circle-outline",
    },
    {
      "type":"password",
      "label":"پسورد",
      "placeholders":"رمز عبور خود را وارد نمایید",
      "icon":"mdi mdi-lock-open-variant-outline",
    },
    {
      "type":"checkbox",
      "label":"",
    },
  ]

  ngOnInit(): void {
    let group:any = {}
    this.formTemplate.forEach(input_template =>{
      group[input_template.label] = new FormControl('');
    })
    this.myFormGroup = new FormGroup(group);
  }

  onSubmit(){
    console.log(this.myFormGroup.value)
  }

}
