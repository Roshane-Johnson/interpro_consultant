import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IQuote } from '../interfaces/api-quote';
import { ApiResponse } from '../interfaces/api-response';
@Injectable({
   providedIn: 'root',
})
export class QuoteService {
   baseUrl = environment.baseUrl + '/quotes/';

   constructor(private http: HttpClient, private ngZone: NgZone) {}

   createOne(quote: IQuote) {
      return this.http.post<ApiResponse>(this.baseUrl, quote);
   }

   getAll() {
      return this.http.get<ApiResponse>(this.baseUrl);
   }

   getOne(id: string) {
      return this.http.get<ApiResponse>(this.baseUrl + id);
   }

   updateOne(id: string, quote: IQuote) {
      return this.http.patch<ApiResponse>(this.baseUrl + id, quote);
   }

   deleteOne(id: string) {
      return this.http.delete<ApiResponse>(this.baseUrl + id);
   }

   total() {
      this.getAll().subscribe({
         next: (resp: ApiResponse) => {
            console.log(resp);
         },
         error: (error: HttpErrorResponse) => console.dir(error),
      });
   }
}
