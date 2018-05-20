import { Component, OnInit } from '@angular/core';
import {Contact} from "../../models/contact";

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

}
