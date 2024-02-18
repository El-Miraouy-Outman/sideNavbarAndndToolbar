import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementRoutingModule } from './management-routing.module';
import { ManagementComponent } from './management.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import {SidenavComponent} from "./sidenav/sidenav.component";
import { BodyManagementComponent } from './body-management/body-management.component';
import {MatSidenavContainer} from "@angular/material/sidenav";
import {MatToolbarRow} from "@angular/material/toolbar";
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    ManagementComponent,
    DashbordComponent,
    SidenavComponent,
    BodyManagementComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ManagementRoutingModule,
    MatSidenavContainer,
    MatToolbarRow
  ]
})
export class ManagementModule { }
