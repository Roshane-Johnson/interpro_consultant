import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IApiResponse } from '../interfaces/api-response';
import { IUser } from '../interfaces/user';

@Injectable({
   providedIn: 'root',
})
export class AuthService {
   baseUrl = environment.baseUrl + '/auth';
   isLoggedIn = false;

   constructor(private http: HttpClient, private router: Router) {}

   protected saveLoginToken(token: string): void {
      try {
         localStorage.setItem('token', token);
      } catch (error) {
         if (environment.production) console.log('Error logging in out');
         else console.log('Error setting token in local storage', error);
      }
   }

   autoLogout() {
      this.getAuthUser().subscribe({
         next: (resp: IApiResponse) => {
            if (resp.status == 401) {
               this.logout();
            }
         },
         error: (errorResp) => {
            if (errorResp.status == 401) {
               this.logout();
            }
         },
      });
   }

   getAuthUser() {
      return this.http.get<IApiResponse>(this.baseUrl + '/user');
   }

   register(user: Omit<IUser, '_id'>) {
      return this.http.post(this.baseUrl + '/register', user);
   }

   login(user: Pick<IUser, 'email' | 'password'>): Observable<IApiResponse> {
      return this.http.post<IApiResponse>(this.baseUrl + '/login', user).pipe(
         tap((resp: IApiResponse) => {
            if (resp.success === true) {
               this.saveLoginToken(resp.data['token']);
            } else {
               return console.error(resp.message);
            }
         }),
         catchError((error) => of(error))
      );
   }

   logout(): void {
      try {
         localStorage.removeItem('token');
      } catch (error) {
         if (environment.production) console.log('Error logging out');
         else console.log('Error removing token from local storage', error);
      }
   }
}
