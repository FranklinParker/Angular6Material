import { Component, OnInit, Inject } from '@angular/core';
import {MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef, MatTableDataSource} from "@angular/material";
import {ContactHistory} from "../../models/ContactHistory";
import {NgForm} from "@angular/forms";
import {Phone} from "../../models/phone";
import {InvoiceLine} from "../../models/InvoiceLine";

@Component({
  selector: 'app-history',
  templateUrl: './add-edit-contact-history.component.html',
  styleUrls: ['./add-edit-contact-history.component.scss']
})
export class AddEditContactHistoryComponent implements OnInit {
  header: string;
  contactHistory: ContactHistory;
  dataSource = new MatTableDataSource<InvoiceLine>(null);
  displayedColumns = ['amount','itemDescription','delete'];


  constructor(public bottomSheetRef: MatBottomSheetRef<any>,
              @Inject(MAT_BOTTOM_SHEET_DATA) public data: any) {
    this.header = data.header;
    this.contactHistory = data.contactHistory;
    this.dataSource.data = this.contactHistory.invoiceLines;
  }

  ngOnInit() {
  }

  /**
   * add a new invoice line
   *
   */
  addInvoiceLine(){
    if(!this.contactHistory.invoiceLines){
      this.contactHistory.invoiceLines = [{
        amount:0,
        itemDescription: 'test'
      }];
    } else{
      this.contactHistory.invoiceLines.push({
        amount:0,
        itemDescription: 'Number two'
      });
    }
    this.dataSource.data = this.contactHistory.invoiceLines;


  }
  deleteItem(invoiceLine:InvoiceLine){

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
    this.bottomSheetRef.dismiss({contactHistory: this.contactHistory});
  }

}
