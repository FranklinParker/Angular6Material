import {Component, OnInit} from '@angular/core';
import {ContactService} from "../../service/contact.service";
import {Contact} from "../../models/contact";

@Component({
  selector: 'app-contact-main',
  templateUrl: './contact-main.component.html',
  styleUrls: ['./contact-main.component.scss']
})
export class ContactMainComponent implements OnInit {

  contacts: Contact[];
  contact: Contact;

  constructor(private contactService: ContactService) {
  }

  ngOnInit() {
    this.setContactDefault();
    this.contactService.getContacts()
      .subscribe((result) => {
        this.contacts = result['records'];
      });

    this.contactService.contactAddedUpdate
      .subscribe((contact: Contact) => {
        if(!contact || !this.contacts){
          return;
        }
        this.setContactDefault();
        const contactFound = this.contacts.find(
          (cont:Contact)=> cont._id=== contact._id);
        if(contactFound){
          contactFound._id = contact._id;
        } else{
          this.contacts.push(contact);
        }
    });
  }

  private setContactDefault(){
    this.contact = {
      firstName: 'Joe',
      lastName: '',
      email: '',
      description: '',
      phones: [
        {
          number: '777 661-1000',
          type: 'Cell',
          primary: true
        },
        {
          number: '888 662-8000',
          type: 'Home',
          primary: false
        }
      ],
      history: []
    };
  }
}
