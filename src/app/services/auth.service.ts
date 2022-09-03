import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from '../interfaces/user';

@Injectable({
   providedIn: 'root',
})
export class AuthService {
   baseUrl = environment.baseUrl;

   constructor(private http: HttpClient) {}

   login(user: Partial<IUser>): Observable<any> {
      return this.http
         .post(this.baseUrl + '/auth/login', user)
         .pipe(tap((resp: any) => console.log('Login Response =>', resp)));
   }

   logout(): void {
      localStorage.removeItem('token');
   }

   // getAuthUser(): Observable<IUser> {
   //    return this.http.
   // }
}
