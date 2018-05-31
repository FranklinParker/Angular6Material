import { Component, OnInit, Inject } from '@angular/core';
import {MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef} from "@angular/material";
import {ContactHistory} from "../../models/ContactHistory";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-history',
  templateUrl: './add-edit-contact-history.component.html',
  styleUrls: ['./add-edit-contact-history.component.scss']
})
export class AddEditContactHistoryComponent implements OnInit {
  header: string;
  contactHistory: ContactHistory;
  constructor(public bottomSheetRef: MatBottomSheetRef<any>,
              @Inject(MAT_BOTTOM_SHEET_DATA) public data: any) {
    this.header = data.header;
    this.contactHistory = data.contactHistory;
  }

  ngOnInit() {
  }

  /**
   * close the contact
   *
   */
  onClose(){
    this.bottomSheetRef.dismiss({contactHistory:null});
  }

  /**
   * save the contactHistory
   *
   * @param {NgForm} contactHistoryForm
   */
  onSubmit(contactHistoryForm: NgForm){
    this.bottomSheetRef.dismiss({conactHistory: this.contactHistory});
  }

}
