import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactMainComponent } from './components/contact-main/contact-main.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ContactMainComponent
  ],
  exports: [
    ContactMainComponent
  ]
})
export class ContactsModule { }
