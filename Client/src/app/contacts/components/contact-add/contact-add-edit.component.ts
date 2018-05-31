import {Component, OnInit, Input} from '@angular/core';
import {Contact} from "../../models/contact";
import {NgForm} from "@angular/forms";
import {ContactService} from "../../service/contact.service";
import {MatSnackBar} from "@angular/material";

@Component({
  selector: 'app-conact-add',
  templateUrl: './contact-add-edit.component.html',
  styleUrls: ['./contact-add-edit.component.scss']
})
export class ContactAddEditComponent implements OnInit {
  @Input('addEditHeader') addEditHeader: string;
  @Input('contact') contact: Contact;

  constructor(private contactService: ContactService,
              public snackBar: MatSnackBar) {
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
      .subscribe((result: { success: boolean, result?: Contact, error:string}) => {
        if(result.success){
          this.snackBar.open('Contact Saved', 'Ok', {
            duration: 3000
          });

        } else{
          this.snackBar.open('Contact Saved', 'Warning', {
            duration: 3000});
                 }
      })
  }

}
