import { Component, OnInit, Inject } from '@angular/core';
import {MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef} from "@angular/material";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  header: string;
  constructor(public bottomSheetRef: MatBottomSheetRef<any>,
              @Inject(MAT_BOTTOM_SHEET_DATA) public data: any) {
    this.header = data.header;
  }

  ngOnInit() {
  }

  onClose(){
    this.bottomSheetRef.dismiss({});
  }

}
