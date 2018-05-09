import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Rx";
import {User} from "../../auth/model/User";
import {map} from "rxjs/operators";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  /**
   * Register a user
   *
   *
   * @param {User} user
   * @returns {Observable<any>}
   */
  register(user: User): Observable<any> {
    return this.http.post(environment.url + 'user/register',
      user)
      .pipe(map(data => data));

  }
}
