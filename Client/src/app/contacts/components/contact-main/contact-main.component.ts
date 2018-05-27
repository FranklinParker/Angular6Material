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
  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contactService.getContacts()
      .subscribe((result)=>{
        console.log('contacts', result)
         this.contacts = result['records'];
        });
  }

}
