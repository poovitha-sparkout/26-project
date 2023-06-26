import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const authReq = request.clone({
      headers: request.headers.set('Content-Types', 'application/json')
    });
    console.log('Intercepted HTTP call', authReq);
    return next.handle(authReq);
  }
  
}
