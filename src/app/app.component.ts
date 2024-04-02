import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {User} from "./models/User";
import {UserService} from "./services/user.service";
import {emit} from "@angular-devkit/build-angular/src/tools/esbuild/angular/compilation/parallel-worker";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'backOffice-front';
   users!: Observable<User[]> ;

  constructor(private userService :UserService) {
    console.log("=======app component =====  ")
    //this.fetchAllUser();
    //this.login()
  }


  login(){
    console.log("entrer ____")
    let userName ="miraouy@gmail.com";
    let passWord ="12341234";
    this.userService.login(userName,passWord).subscribe({
      next :data => {
        console.log("login ",data)
      },
      error : err => {

        console.log("____error ",err);
      }
    })
   console.log("sorteie____")
  }

}
