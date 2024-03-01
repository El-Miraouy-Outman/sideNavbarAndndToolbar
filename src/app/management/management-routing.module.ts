import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ManagementComponent} from "./management.component";
import {DashbordComponent} from "./dashbord/dashbord.component";
import {authorizationGuard} from "../guards/authorization.guard";
import {UserComponent} from "../user/user.component";

const routes: Routes = [
  {
    path: 'management', component: ManagementComponent,
    //canActivate : [authorizationGuard], data :{role :"ADMIN"},
    children: [
      {
        path: 'dashboard', component:DashbordComponent ,
        //canActivate : [authorizationGuard], data :{role :"ADMIN"},
      },
      {
        path: 'tickets', component:DashbordComponent ,
        //canActivate : [authorizationGuard], data :{role :"ADMIN"},
      },
      {
        path: 'users', component:UserComponent ,
        //canActivate : [authorizationGuard], data :{role :"ADMIN"},
      }
    ]
  },
  {
    path :'', component : ManagementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementRoutingModule { }
