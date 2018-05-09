import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import {MaterialModule} from "../material.module";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    LoginComponent,
    RegistrationComponent
  ],
  exports: [
    LoginComponent,
    RegistrationComponent
  ]
})
export class UserModule { }
