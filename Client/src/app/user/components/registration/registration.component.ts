import {Component, OnInit} from '@angular/core';
import {UserRegistration} from "../../../auth/model/UserRegistration";
import {NgForm} from "@angular/forms";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  userRegistration: UserRegistration = {
    id: '',
    email: '',
    password: '',
    cellPhone: '',
    firstName: '',
    lastName: ''
  };

  constructor(private userService: UserService) {
  }

  ngOnInit() {
  }

  /**
   * save a new user
   *
   *
   * @param {NgForm} registrationForm
   */
  onSubmit(registrationForm: NgForm) {
    this.userService.register(registrationForm.value)
      .subscribe((result) => {
        console.log('registered', result);
      });

  }

}
