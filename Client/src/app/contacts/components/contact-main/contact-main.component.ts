import { Component, OnInit } from '@angular/core';
import {ContactService} from "../../service/contact.service";
import {Contact} from "../../models/contact";

@Component({
  selector: 'app-contact-main',
  templateUrl: './contact-main.component.html',
  styleUrls: ['./contact-main.component.scss']
})
export class ContactMainComponent implements OnInit {

  contacts: Contact[];
  contact: Contact ={
  firstName: 'Joe',
  lastName: '',
  email: '',
  description: '',
  phones: [
    {
      number: '777 661-100',
      type: 'Cell',
      primary: true
    },
    {
      number: '888 662-8000',
      type: 'Home',
      primary: false
    }
    ]
  };
  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contactService.getContacts()
      .subscribe((result)=>{
        console.log('contacts', result)
         this.contacts = result['records'];
        });
  }

}
