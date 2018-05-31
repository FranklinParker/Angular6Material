import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactMainComponent } from './components/contact-main/contact-main.component';
import {SharedModule} from "../shared/shared.module";
import { ContactAddEditComponent } from './components/contact-add/contact-add-edit.component';
import { ContactPhonesComponent } from './components/contact-phones/contact-phones.component';
import { AddEditContactHistoryComponent } from './components/add-edit-contact-history/add-edit-contact-history.component';
import { ContactHistoryComponent } from './components/contact-history/contact-history.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    ContactMainComponent,
    ContactAddEditComponent,
    ContactPhonesComponent,
    AddEditContactHistoryComponent,
    ContactHistoryComponent
  ],
  exports: [
    ContactMainComponent
  ],
  entryComponents: [
    AddEditContactHistoryComponent
  ]
})
export class ContactsModule { }
