import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Rx";
import {map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {User} from "../../auth/model/User";
import {Contact} from "../models/contact";

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(private http: HttpClient) {
  }

  /**
   * save  a contact
   *
   *
   * @param {Contact} contact
   * @returns {Observable<any>}
   */
  save(contact: Contact): Observable<any> {
    console.log('saving');
    return this.http.post(environment.url + 'api/contacts',
      contact)
      .pipe(map(data => {
        console.log('data', data);
        return data;
      }));

  }

}
