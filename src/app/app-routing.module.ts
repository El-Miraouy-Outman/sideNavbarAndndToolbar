import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [

  {
    "path": "management", loadChildren: () => import('./management/management.module').then(m => m.ManagementModule)
  },

  {"path" : "user" ,loadChildren : () => import('./user/user.module').then(m => m.UserModule)
  },

  {
    path: "", redirectTo: "user", pathMatch: "full"
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
