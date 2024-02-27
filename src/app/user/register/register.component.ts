import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  salat = true;
  isLinear = false;
  // @ts-ignore
  firstFormGroup: FormGroup;
  // @ts-ignore
  secondFormGroup: FormGroup;

  constructor(private fb: FormBuilder) {
    console.log("==== register ===")
  }

  form =this.fb.group({

    email : ['',
      [ Validators.required,
        Validators.maxLength(20),
        Validators.minLength(8)
      ]],
    newPassWord : ['',
      [ Validators.required,
        Validators.maxLength(20),
        Validators.minLength(8)
      ]],
    confirmNewPassWord : ['',
      [ Validators.required,
        Validators.maxLength(20),
        Validators.minLength(8)
      ]],
  });

  ngOnInit() {

  }

  confirm (){
  }
  get getEmail() {
    console.log(" name ! ", this.form.controls.email.value)
    return  this.form.controls.email.value;
  }
  next (){
    console.log("-- next---",this.getEmail)
  }
}
