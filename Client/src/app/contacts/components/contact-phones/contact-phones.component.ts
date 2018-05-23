import {Component, OnInit, Input} from '@angular/core';
import {MatTableDataSource} from "@angular/material";
import {Phone} from "../../models/phone";
import {Contact} from "../../models/contact";

@Component({
  selector: 'app-contact-phones',
  templateUrl: './contact-phones.component.html',
  styleUrls: ['./contact-phones.component.scss']
})
export class ContactPhonesComponent implements OnInit {
  @Input('contact') contact:Contact;
  dataSource = new MatTableDataSource<Phone>(null);

  displayedColumns = ['number', 'type', 'primary'];

  constructor() {
  }

  ngOnInit() {
    this.dataSource.data = this.contact.phones;
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
