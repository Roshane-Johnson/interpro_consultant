import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IApiResponse } from '../interfaces/api-response';
import { IUser } from '../interfaces/user';

@Injectable({
   providedIn: 'root',
})
export class AuthService {
   baseUrl = environment.baseUrl;
   isLoggedIn = false;

   constructor(private http: HttpClient) {}

   protected saveLoginToken(token: string): void {
      localStorage.setItem('token', token);
   }

   login(user: Pick<IUser, 'email' | 'password'>): Observable<IApiResponse> {
      return this.http
         .post<IApiResponse>(this.baseUrl + '/auth/login', user)
         .pipe(
            tap((resp: IApiResponse) => {
               // login failed
               if (resp.success !== true) return console.error(resp.message);

               //login successful
               this.saveLoginToken(resp.data['token']);
            }),
            catchError((error) => of(error))
         );
   }

   register(user: Omit<IUser, '_id'>) {
      return this.http.post(this.baseUrl + '/auth/register', user);
   }

   logout(): void {
      localStorage.removeItem('token');
   }
}
