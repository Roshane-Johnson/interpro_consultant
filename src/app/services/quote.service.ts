import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IQuote } from '../interfaces/api-quote';
import { ApiResponse } from '../interfaces/api-response';
@Injectable({
   providedIn: 'root',
})
export class QuoteService {
   baseUrl = environment.baseUrl + '/quotes/';

   constructor(private http: HttpClient) {}

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
}
