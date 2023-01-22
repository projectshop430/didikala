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
      "label":"FeildRegemail",
    },
    {
      "type":"textBox",
      "label":"FeildRegpassword",
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
