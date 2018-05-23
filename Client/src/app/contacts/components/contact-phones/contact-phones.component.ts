import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material";
import {Phone} from "../../models/phone";

@Component({
  selector: 'app-contact-phones',
  templateUrl: './contact-phones.component.html',
  styleUrls: ['./contact-phones.component.scss']
})
export class ContactPhonesComponent implements OnInit {
  dataSource = new MatTableDataSource<Phone>(phones);

  displayedColumns = ['number','type'];

  constructor() { }

  ngOnInit() {
  }

}

const phones: Phone[] = [{
  number: '777 661-100',
  type: 'Home',
  primary: false
}];
