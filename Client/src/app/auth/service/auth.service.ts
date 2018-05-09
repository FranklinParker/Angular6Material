import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable} from "rxjs";
import {shareReplay, filter, tap, map} from 'rxjs/operators';

import {User} from "../model/User";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

export const ANONYMOUS_USER: User = {
  id: undefined,
  email: undefined,
  roles: []
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private subject = new BehaviorSubject<User>(ANONYMOUS_USER);

  user$: Observable<User> = this.subject.asObservable().pipe(filter(user => !!user));

  isLoggedIn$: Observable<boolean> = this.user$.pipe(map(user => !!user.id));

  isLoggedOut$: Observable<boolean> = this.isLoggedIn$.pipe(map(isLoggedIn => !isLoggedIn));

  constructor(private http: HttpClient){

  }

  login(email: string, password: string){

    this.http.post( environment.url+ 'user/login',
      {email, password}
    )
      .pipe(map( data=> data))
      .subscribe((data)=>{
        console.log('login got data', data);
        this.subject.next({
          id: email,
          email: email
        });
      });

  }

  logout(){
    this.subject.next(ANONYMOUS_USER);
  }

}
