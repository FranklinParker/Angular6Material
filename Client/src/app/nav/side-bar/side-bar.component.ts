import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthService} from "../../auth/service/auth.service";

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  @Output('closeSideNav') closeSideNav = new EventEmitter();

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
    this.closeSideNav.emit();

  }

  onSidenavClose(){
    this.closeSideNav.emit();
  }

}
