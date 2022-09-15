import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { catchError, of, take } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IQuote } from '../interfaces/api-quote';
import { IApiResponse } from '../interfaces/api-response';
import { AuthService } from './auth.service';
@Injectable({
   providedIn: 'root',
})
export class QuoteService {
   baseUrl = environment.baseUrl + '/quotes/';

   constructor(private http: HttpClient, private authService: AuthService) {}

   createOne(quote: IQuote) {
      return this.http.post<IApiResponse>(this.baseUrl, quote).pipe(take(1));
   }

   getAll() {
      return this.http.get<IApiResponse>(this.baseUrl).pipe(
         take(1),
         catchError((error: any) => {
            if (error.status == 403 || error.status == 401) {
               this.authService.logout();
            }
            return of(error);
         })
      );
   }

   getOne(id: string) {
      return this.http.get<IApiResponse>(this.baseUrl + id).pipe(take(1));
   }

   updateOne(id: string, quote: IQuote) {
      return this.http
         .patch<IApiResponse>(this.baseUrl + id, quote)
         .pipe(take(1));
   }

   deleteOne(id: string) {
      return this.http.delete<IApiResponse>(this.baseUrl + id).pipe(take(1));
   }

   total() {
      this.getAll().subscribe({
         next: (resp: IApiResponse) => {
            console.log(resp);
         },
         error: (error: HttpErrorResponse) => console.dir(error),
      });
   }
}
