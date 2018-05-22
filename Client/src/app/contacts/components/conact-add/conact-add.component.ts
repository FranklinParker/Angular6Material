import { Component, OnInit } from '@angular/core';
import {Contact} from "../../models/contact";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-conact-add',
  templateUrl: './conact-add.component.html',
  styleUrls: ['./conact-add.component.scss']
})
export class ConactAddComponent implements OnInit {

  contact: Contact ={
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    description: '',


  }
  constructor() { }

  ngOnInit() {
  }

  onSubmit(contactForm:NgForm){
    console.log('contact', this.contact);
  }

}
