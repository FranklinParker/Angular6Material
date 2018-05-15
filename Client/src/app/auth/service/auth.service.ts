import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {shareReplay, filter, tap, map, take} from 'rxjs/operators';

import {User} from "../model/User";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Router} from "@angular/router";

export const ANONYMOUS_USER: User = {
  _id: undefined,
  email: undefined,
  roles: []
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private subject = new BehaviorSubject<User>(ANONYMOUS_USER);

  user$: Observable<User> = this.subject.asObservable().pipe(filter(user => !!user));

  isLoggedIn$: Observable<boolean> = this.user$.pipe(map(user => !!user._id));

  isLoggedOut$: Observable<boolean> = this.isLoggedIn$.pipe(map(isLoggedIn => !isLoggedIn));

  constructor(private http: HttpClient,
              private router: Router) {
    this.isLoggedOut$
      .pipe(take(1))
      .subscribe((isLoggedOut: boolean) => {
        console.log("got logged ");
        if (isLoggedOut && this.getToken()) {
          this.getUserFromToken();
        }
      });

  }

  /**
   * log in a user
   *
   * @param {string} email
   * @param {string} password
   */
  login(email: string, password: string) {

    this.http.post(environment.url + 'user/login',
      {email, password}
    )
      .pipe(map(data => data))
      .subscribe((response: { success: boolean, token?: string, user?: User, message?: string }) => {
        if (response.success) {
          this.subject.next(response.user);
          localStorage.setItem('token', response.token);
          this.router.navigate(['/']);

        } else {
          this.subject.next(ANONYMOUS_USER);
        }


      });

  }

  logout() {
    localStorage.clear();
    this.subject.next(ANONYMOUS_USER);
    this.router.navigate(['/login']);

  }

  getToken() {
    return localStorage.getItem('token');

  }

  private getUserFromToken() {
    this.http.get(environment.url + 'api/getuser/fromtoken')
      .subscribe((result: { success: boolean, user?: User }) => {
        if (result.success) {
          console.log('user', result.user);
          this.subject.next(result.user);
          this.router.navigate(['/']);
        }
      })
  }

}
