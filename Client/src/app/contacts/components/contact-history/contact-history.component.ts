import { Component, OnInit, Input } from '@angular/core';
import {Contact} from "../../models/contact";
import {MatBottomSheet} from "@angular/material";
import {AddEditContactHistoryComponent} from "../add-edit-contact-history/add-edit-contact-history.component";
import {ContactHistory} from "../../models/ContactHistory";

@Component({
  selector: 'app-contact-history',
  templateUrl: './contact-history.component.html',
  styleUrls: ['./contact-history.component.scss']
})
export class ContactHistoryComponent implements OnInit {
  @Input('contact') contact: Contact;

  constructor(private bottomSheet: MatBottomSheet) {
  }

  ngOnInit() {
  }

  /**
   * add a new contact add-edit-contact-history
   *
   */

  addNewHistory() {
    let bottomSheetRef = this.bottomSheet.open(AddEditContactHistoryComponent, {
      data: {header: 'Add New History', contactHistory: this.getBlankContactHistory()},
      disableClose: true,

    });

    bottomSheetRef.afterDismissed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }
  /**
   * creates a blank contact add-edit-contact-history for adding a new contact add-edit-contact-history
   *
   * @returns {ContactHistory}
   */
  private getBlankContactHistory(): ContactHistory {
    const contactHistory: ContactHistory = {
      date: new Date(),
      description: 'History'
    }
    return contactHistory;

  }

}
