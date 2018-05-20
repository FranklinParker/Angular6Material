import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactMainComponent } from './components/contact-main/contact-main.component';
import {SharedModule} from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    ContactMainComponent
  ],
  exports: [
    ContactMainComponent
  ]
})
export class ContactsModule { }
