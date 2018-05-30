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

  displayedColumns = ['number', 'type', 'primary','delete'];

  constructor() {
  }

  ngOnInit() {
    this.dataSource.data = this.contact.phones;
  }

  /**
   * add a new phone
   */
  onAddPhone(){
    this.contact.phones.push({
      number: '888 661-1000',
      type: '',
      primary: false
    });
    this.dataSource.data = this.contact.phones;
  }

  /**
   * Marks a phone as primary
   *
   * @param {Phone} phone
   */
  selectPrimary(phone:Phone){
    if(phone.primary){
      this.contact.phones.forEach((phoneLs)=>{
        if(phoneLs.number !== phone.number){
          phoneLs.primary = false;
        }
      });
    }
  }

  /**
   *
   *
   * @param {Phone} phone
   */
  deletePhone(phone: Phone){

    const idx = this.contact.phones.indexOf(phone);

    if(idx!=-1){
      this.contact.phones.splice(idx,1);
      this.dataSource.data = this.contact.phones;
    }


  }

}

