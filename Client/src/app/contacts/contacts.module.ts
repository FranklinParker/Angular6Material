import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactMainComponent } from './components/contact-main/contact-main.component';
import {SharedModule} from "../shared/shared.module";
import { ConactAddComponent } from './components/conact-add/conact-add.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    ContactMainComponent,
    ConactAddComponent
  ],
  exports: [
    ContactMainComponent
  ]
})
export class ContactsModule { }
