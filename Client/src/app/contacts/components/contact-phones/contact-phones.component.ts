import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material";
import {Phone} from "../../models/phone";

@Component({
  selector: 'app-contact-phones',
  templateUrl: './contact-phones.component.html',
  styleUrls: ['./contact-phones.component.scss']
})
export class ContactPhonesComponent implements OnInit {
  dataSource = new MatTableDataSource<Phone>(phones);

  displayedColumns = ['number', 'type', 'primary'];

  constructor() {
  }

  ngOnInit() {
  }

}

const phones: Phone[] = [{
  number: '777 661-100',
  type: 'Cell',
  primary: true
},
  {
    number: '888 662-8000',
    type: 'Home',
    primary: false
  }];
