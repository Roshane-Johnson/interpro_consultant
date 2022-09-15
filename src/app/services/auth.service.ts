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

      if (token == null) return;

      tokenInfo$.subscribe({
         next: (resp: IApiResponse) => {
            if (resp.success == false)
               throw new Error('Error accessing token info');

            const now = Date.now();

            /**
             * JWT parses time in an strange format so it has to be multiplied by a thousand
             * for it to show the correct time relative to the local system time.
             *
             * Read More: https://stackoverflow.com/questions/51292406
             */
            const tokenExpiryDate = resp.data['exp'] && resp.data['exp'] * 1000;

            if (!tokenExpiryDate) this.logout();
            if (now > tokenExpiryDate) return this.logout();

            console.log('Now:', new Date(now));
            console.log('Token Expiry Date:', new Date(tokenExpiryDate));
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

   /**
    * Register/Create a user with provided credentials
    * @param user email and password of user being logged in.
    * @example { email: 'xyz@mail.com', password: 'p@$$w0rd' }
    * @returns Observable<IApiResponse>
    */
   register(user: Omit<IUser, '_id'>): Observable<IApiResponse> {
      return this.http
         .post<IApiResponse>(this.baseUrl + '/register', user)
         .pipe(take(1));
   }

   /**
    * Login in a user with valid credentials
    * @param user email and password of user being logged in.
    * @example { email: 'xyz@mail.com', password: 'p@$$w0rd' }
    * @returns Observable<IApiResponse>
    */
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

   /**
    * Logs out the authenticated user.
    * Note: It automatically redirects to the base url
    */
   logout(): void {
      try {
         localStorage.removeItem('token');
         this.router.navigate(['/']);
      } catch (error) {
         if (environment.production) console.log('Error logging out');
         else console.log('Error removing token from local storage', error);
      }
   }
}
