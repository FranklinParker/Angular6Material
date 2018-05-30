import {Component, OnInit, Input} from '@angular/core';
import {Contact} from "../../models/contact";
import {NgForm} from "@angular/forms";
import {ContactService} from "../../service/contact.service";

@Component({
  selector: 'app-conact-add',
  templateUrl: './contact-add-edit.component.html',
  styleUrls: ['./contact-add-edit.component.scss']
})
export class ContactAddEditComponent implements OnInit {

  @Input('contact') contact: Contact;

  constructor(private contactService: ContactService) {
  }

  ngOnInit() {
  }

  /**
   * save a contact
   *
   * @param {NgForm} contactForm
   */
  onSubmit(contactForm: NgForm) {
    this.contactService.save(this.contact)
      .subscribe((result: { success: boolean, result?: Contact }) => {
      })
  }

}
