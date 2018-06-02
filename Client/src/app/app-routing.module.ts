import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./user/components/login/login.component";
import {RegistrationComponent} from "./user/components/registration/registration.component";
import {HomeComponent} from "./core/components/home/home.component";
import { AuthGuard } from "./core/guard/auth.guard";
import {ContactMainComponent} from "./contacts/components/contact-main/contact-main.component";
import {TestComponent} from "./test/test.component";

const routes: Routes = [
  {
    path: '',component: HomeComponent, canActivate: [AuthGuard]
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path:'registration',
    component: RegistrationComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'contacts',
    component: ContactMainComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'test',
    component: TestComponent
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
