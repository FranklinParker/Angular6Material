import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideBarComponent } from './nav/side-bar/side-bar.component';
import { HeaderComponent } from './nav/header/header.component';
import {MaterialModule} from "./material.module";
import {AuthService} from "./auth/service/auth.service";
import {HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './core/components/home/home.component';
import {UserModule} from "./user/user.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {TokenInterceptor} from "./auth/service/token.interceptor";
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {ContactsModule} from "./contacts/contacts.module";
import { TestComponent } from './test/test.component';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    HeaderComponent,
    HomeComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FlexLayoutModule,
    UserModule,
    FormsModule,
    NgbModule.forRoot(),
    ContactsModule
  ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
