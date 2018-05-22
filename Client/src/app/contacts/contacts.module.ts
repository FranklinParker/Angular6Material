import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactMainComponent } from './components/contact-main/contact-main.component';
import {SharedModule} from "../shared/shared.module";
import { ContactAddComponent } from './components/contact-add/contact-add.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    ContactMainComponent,
    ContactAddComponent
  ],
  exports: [
    ContactMainComponent
  ]
})
export class ContactsModule { }
