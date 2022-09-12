import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, of, take, tap } from 'rxjs';
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
      const token = localStorage.getItem('token');
      const tokenInfo$ = this.getTokenInfo();

      if (token == null) return console.log('not logged in');

      tokenInfo$.subscribe({
         next: (resp: IApiResponse) => {
            if (resp.success == false)
               throw new Error('Error accessing token info');

            const now = Date.now();
            const tokenExpiryDate = resp.data['exp'];

            console.log(Date.parse(token.toString()));
         },
         error: (error: HttpErrorResponse) => {
            console.log(error);
         },
      });
   }

   getTokenInfo(): Observable<IApiResponse> {
      return this.http.get<IApiResponse>(this.baseUrl + '/token').pipe(take(1));
   }

   getAuthUser() {
      return this.http.get<IApiResponse>(this.baseUrl + '/user').pipe(take(1));
   }

   register(user: Omit<IUser, '_id'>): Observable<IApiResponse> {
      return this.http
         .post<IApiResponse>(this.baseUrl + '/register', user)
         .pipe(take(1));
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
         catchError((error) => of(error)),
         take(1)
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
