import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IQuote } from '../interfaces/api-quote';
import { IApiResponse } from '../interfaces/api-response';
@Injectable({
   providedIn: 'root',
})
export class QuoteService {
   baseUrl = environment.baseUrl + '/quotes/';

   constructor(private http: HttpClient, private ngZone: NgZone) {}

   createOne(quote: IQuote) {
      return this.http.post<IApiResponse>(this.baseUrl, quote);
   }

   getAll() {
      return this.http.get<IApiResponse>(this.baseUrl);
   }

   getOne(id: string) {
      return this.http.get<IApiResponse>(this.baseUrl + id);
   }

   updateOne(id: string, quote: IQuote) {
      return this.http.patch<IApiResponse>(this.baseUrl + id, quote);
   }

   deleteOne(id: string) {
      return this.http.delete<IApiResponse>(this.baseUrl + id);
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
