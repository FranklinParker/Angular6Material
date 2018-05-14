
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {AuthService} from "./auth.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public auth:AuthService) {}

  /**
   * adds a header with a token
   *
   *
   * @param {HttpRequest<any>} request
   * @param {HttpHandler} next
   * @returns {Observable<HttpEvent<any>>}
   */
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = this.auth.getToken();
    console.log('token:'+ token);
    if(token){
      console.log('setting header token', token);
      const authReq = request.clone({
        headers: request.headers.set('x-auth',token)
      });
      return next.handle(authReq);

    }else{
      return next.handle(request);

    }

  }
}
