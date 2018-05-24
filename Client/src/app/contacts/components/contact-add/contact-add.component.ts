import { Component, OnInit } from '@angular/core';
import {Contact} from "../../models/contact";
import {NgForm} from "@angular/forms";
import {ContactService} from "../../service/contact.service";

@Component({
  selector: 'app-conact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.scss']
})
export class ContactAddComponent implements OnInit {

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
  }

  onSubmit(contactForm:NgForm){
    this.contactService.save(this.contact)
      .subscribe((result)=>{
        console.log('saved contact', result);
      })
  }

}
