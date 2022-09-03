import { Injectable } from '@angular/core';
import {
   HttpRequest,
   HttpHandler,
   HttpEvent,
   HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
   constructor() {}

   intercept(
      request: HttpRequest<unknown>,
      next: HttpHandler
   ): Observable<HttpEvent<unknown>> {
      const isApiUrl = request.url.startsWith(environment.baseUrl);
      const isLoggedIn = !!localStorage.getItem('token');
      const token = localStorage.getItem('token');

      if (isLoggedIn && isApiUrl) {
         request = request.clone({
            setHeaders: { Authorization: `Bearer ${token}` },
         });
      }

      return next.handle(request);
   }
}
