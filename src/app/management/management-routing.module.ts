import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ManagementComponent} from "./management.component";
import {DashbordComponent} from "./dashbord/dashbord.component";

const routes: Routes = [
  {
    path: 'management', component: ManagementComponent,
    children: [
      {
        path: 'dashboard', component:DashbordComponent
      },
      {
        path: '', redirectTo: 'dashboard', pathMatch: "full"
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
