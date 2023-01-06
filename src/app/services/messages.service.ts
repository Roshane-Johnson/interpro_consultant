import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IMessage } from '../interfaces/api-message';
import { ApiResponse } from '../interfaces/api-response';

@Injectable({
   providedIn: 'root',
})
export class MessageService {
   apiUrl = environment.baseUrl + '/messages/';

   constructor(private http: HttpClient) {}

   createOne(message: IMessage) {
      return this.http.post<ApiResponse>(this.apiUrl, message).pipe(take(1));
   }

   getAll() {
      return this.http.get<ApiResponse>(this.apiUrl).pipe(take(1));
   }

   getOne(id: string) {
      return this.http.get<ApiResponse>(this.apiUrl + id).pipe(take(1));
   }

   updateOne(id: string, message: IMessage) {
      return this.http
         .patch<ApiResponse>(this.apiUrl + id, message)
         .pipe(take(1));
   }

   deleteOne(id: string) {
      return this.http.delete<ApiResponse>(this.apiUrl + id).pipe(take(1));
   }

   total() {
      this.getAll().subscribe({
         next: (resp: ApiResponse) => {
            // console.log(resp);
         },
         error: (error: HttpErrorResponse) => console.dir(error),
      });
   }
}
