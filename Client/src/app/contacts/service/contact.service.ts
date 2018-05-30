import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs/Rx";
import {map, shareReplay, take} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {User} from "../../auth/model/User";
import {Contact} from "../models/contact";

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contactAddedUpdate: BehaviorSubject<Contact> = new BehaviorSubject<Contact>(null);
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
    return this.http.post(environment.url + 'api/contacts',
      contact)
      .pipe(shareReplay(),take(1),
        map((data:{success:boolean,result?:Contact}) => {
        if(data.success){
          this.contactAddedUpdate.next(data.result);
        }
        return data;
      }));

  }

  /**
   * get all contacts
   *
   *
   *
   *
   */
  getContacts(){
    return this.http.get(environment.url + 'api/contacts')
      .pipe(map(data=>data));
  }

}
