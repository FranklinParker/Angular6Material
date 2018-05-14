import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./user/components/login/login.component";
import {RegistrationComponent} from "./user/components/registration/registration.component";
import {HomeComponent} from "./core/components/home/home.component";
import { AuthGuard } from "./core/guard/auth.guard";

const routes: Routes = [
  {
    path: '',component: HomeComponent, canActivate: [AuthGuard]
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path:'registration', component: RegistrationComponent
  },
  {
    path: 'home', component: HomeComponent, canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    AuthGuard
  ]

})
export class AppRoutingModule { }
