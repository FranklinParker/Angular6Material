import { Component, OnInit } from '@angular/core';
import {Contact} from "../../models/contact";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-conact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.scss']
})
export class ContactAddComponent implements OnInit {

  contact: Contact ={
    firstName: '',
    lastName: '',
    email: '',
    description: '',

  }
  constructor() { }

  ngOnInit() {
  }

  onSubmit(contactForm:NgForm){
    console.log('contact', this.contact);
  }

}
