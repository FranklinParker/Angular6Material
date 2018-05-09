import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthService} from "../../auth/service/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output('sidebarToggle') sidebarToggle = new EventEmitter<void>();


  constructor(public authService: AuthService) {

  }

  ngOnInit() {

  }

  onToggle() {
    this.sidebarToggle.emit();
  }

  logout() {
    this.authService.logout();
  }

}
