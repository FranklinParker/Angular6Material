import { Component, OnInit, Inject } from '@angular/core';
import {MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef} from "@angular/material";
import {ContactHistory} from "../../models/ContactHistory";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  header: string;
  contactHistory: ContactHistory;
  constructor(public bottomSheetRef: MatBottomSheetRef<any>,
              @Inject(MAT_BOTTOM_SHEET_DATA) public data: any) {
    this.header = data.header;
    this.contactHistory = data.contactHistory;
  }

  ngOnInit() {
  }

  onClose(){
    this.bottomSheetRef.dismiss({});
  }

  onSubmit(contactHistoryForm: NgForm){
    alert('submit');

  }

}
