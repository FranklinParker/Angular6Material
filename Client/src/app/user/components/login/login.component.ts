import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../../../auth/service/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string;
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit(loginForm: NgForm){
    this.authService.login(this.email, '');
  }
}
