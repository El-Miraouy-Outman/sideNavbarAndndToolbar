import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserComponent} from "./user.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {ManagementComponent} from "../management/management.component";
import {DashbordComponent} from "../management/dashbord/dashbord.component";

const routes: Routes = [
  {
    path: 'users', component: UserComponent,
    children: [
      {
        path: 'login', component: LoginComponent
      },
      {
        path: 'register', component: RegisterComponent
      },
      {
        path: '', redirectTo: 'login', pathMatch: "full"
      }
    ]
  },
  {
    path :'', component : UserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
