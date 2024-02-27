import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.scss'
})
export class ChangePasswordComponent {

 constructor(private fb :FormBuilder) {

 }
 form =this.fb.group({

   oldPassWord : ['',
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

  isLoggedIn = false;
  user! : any;


  onSubmit() {

  }

  private isValidationErrors(obj: any): obj is ValidationErrors {
    return obj && typeof obj === 'object' && !Array.isArray(obj);
  }


}
