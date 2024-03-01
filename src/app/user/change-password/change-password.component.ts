import {ChangeDetectorRef, Component, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {MatStepper} from "@angular/material/stepper";
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {LocalStorageService} from "../../services/storage/local-storage.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.scss'
})
export class ChangePasswordComponent {


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

  onSubmit() { }

  @ViewChild('stepper') stepper: MatStepper | undefined;
  cartCount: number = 0;
  private sub!: Subscription;


  isLogin: boolean = false;
  isLoaded: boolean = false;
  firstFormGroup: FormGroup;
  userRating: any = 0;
  all: number=0;
  constructor(
    private route: ActivatedRoute,
    private dialog:MatDialog,

    private cdr: ChangeDetectorRef,

    private localstorage:LocalStorageService,
    private _snackBar: MatSnackBar,
    private fb:FormBuilder
  ) {
    this.isLogin = this.localstorage.isUserLoggedIn();
    this.firstFormGroup = new FormGroup({
      'comment' : new FormControl("",[Validators.required]),
    });
  }

  ngOnInit() {

  }





  onRatingChanged($event: number) {

  }

  addComment() {


  }
}

