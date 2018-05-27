import { Component, OnInit } from '@angular/core';
import {ContactService} from "../../service/contact.service";

@Component({
  selector: 'app-contact-main',
  templateUrl: './contact-main.component.html',
  styleUrls: ['./contact-main.component.scss']
})
export class ContactMainComponent implements OnInit {

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contactService.getContacts()
      .subscribe((contacts)=>{
        console.log('contacts', contacts)
        });
  }

}
