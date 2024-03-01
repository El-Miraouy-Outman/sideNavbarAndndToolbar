import {Component, OnInit} from '@angular/core';
import {Route, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {LocalStorageService} from "../../services/storage/local-storage.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{

  email = '';
  passWord = '';

  isLoginErrors = false;
  isLoading = false;
  isLoginIn: boolean = false ;

  loginForm:FormGroup=new FormGroup({
    email:new FormControl(this.email,[Validators.required]),
    password:new FormControl(this.passWord,[Validators.required]),
    rememberMe:new FormControl(false)
  });
  constructor(private router :Router,
              private userService: UserService,
              private localStorageService: LocalStorageService
        ) {
  }

  ngOnInit(): void {
     this.localStorageService.setIsUserLoggedIn(false);
    this.isLoginIn = this.localStorageService.isUserLoggedIn();
    if (this.isLoginIn) {
      console.log("is login :",this.localStorageService.isUserLoggedIn())
      //this.router.navigate(['/management']);
    }
  }
 login(){
   if (this.loginForm.valid){
     this.isLoading = true;
     console.log( "DEBUT ====")
     this.userService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe({
       next: (res:any) => {
         console.log( "outman ====",res)
           this.loadProfile(res);
         this.router.navigate(['/management']);
       },
       error: (error) => {
         console.log(error.error);
         this.isLoginErrors = true;
         this.isLoading = false;
         this.localStorageService.setIsUserLoggedIn(false);
         this.localStorageService.removeToken();
       },
     });
   } else {
     this.loginForm.markAllAsTouched();

   }
 }


  getAllUsers(){
    this.userService.fetchAllUser().subscribe({
      next :data => {
        console.log("_____data ",data)
      },
      error : err => {

        console.log("____error ",err);
      }
    })
  }

  register() {
    this.router.navigate(['/users/register']);
  }

  private loadProfile(res: any) {
    console.log("response : ",res);
    if (res) {

      this.localStorageService.setIsUserLoggedIn(true);
      this.localStorageService.setRoles(res.roles)
      this.localStorageService.setFirstName(res.firstName)
      this.localStorageService.setLastName(res.lastName)
      this.localStorageService.setEmail(res.email)
      this.localStorageService.setAccessToken(res.accessToken);
      this.localStorageService.setRefreshToken(res.refreshToken);

      this.isLoading = false;
      //console.log("CONTENU ... ",res.roles)
      if (res.roles.includes("ADMIN")) {
        //console.log("Les rôles contiennent 'SUPPORT'");
        this.localStorageService.setIsAdmin(true);
        //console.log("Maintenant, c'est un admin :", this.localStorageService.isAdmin());
      } else {
        //console.log("Les rôles ne contiennent pas 'SUPPORT'");
      }

    }
  }



}
