import {Component, OnInit, Input} from '@angular/core';
import {Contact} from "../../models/contact";
import {NgForm} from "@angular/forms";
import {ContactService} from "../../service/contact.service";
import {MatBottomSheet, MatSnackBar} from "@angular/material";
import {HistoryComponent} from "../history/history.component";
import {ContactHistory} from "../../models/ContactHistory";

@Component({
  selector: 'app-conact-add',
  templateUrl: './contact-add-edit.component.html',
  styleUrls: ['./contact-add-edit.component.scss']
})
export class ContactAddEditComponent implements OnInit {
  @Input('addEditHeader') addEditHeader: string;
  @Input('contact') contact: Contact;

  constructor(private contactService: ContactService,
              private snackBar: MatSnackBar,
              private bottomSheet: MatBottomSheet) {
  }

  ngOnInit() {
  }

  /**
   * add a new contact history
   *
   */

  addNewHistory() {
    let bottomSheetRef = this.bottomSheet.open(HistoryComponent, {
      data: {header: 'Add New History', contactHistory: this.getBlankContactHistory()},
      disableClose: true
    });

    bottomSheetRef.afterDismissed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  /**
   * save a contact
   *
   * @param {NgForm} contactForm
   */
  onSubmit(contactForm: NgForm) {
    this.contactService.save(this.contact)
      .subscribe((result: { success: boolean, result?: Contact, error: string }) => {
        if (result.success) {
          this.snackBar.open('Contact Saved', 'Ok', {
            duration: 3000
          });

        } else {
          this.snackBar.open('Contact Saved', 'Warning', {
            duration: 3000
          });
        }
      })
  }

  /**
   * creates a blank contact history for adding a new contact history
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
