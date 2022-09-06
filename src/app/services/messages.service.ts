import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IMessage } from '../interfaces/api-message';
import { IApiResponse } from '../interfaces/api-response';

@Injectable({
   providedIn: 'root',
})
export class MessageService {
   apiUrl = environment.baseUrl + '/messages/';

   constructor(private http: HttpClient) {}

   createOne(message: IMessage) {
      return this.http.post<IApiResponse>(this.apiUrl, message);
   }

   getAll() {
      return this.http.get<IApiResponse>(this.apiUrl);
   }

   getOne(id: string) {
      return this.http.get<IApiResponse>(this.apiUrl + id);
   }

   updateOne(id: string, message: IMessage) {
      return this.http.patch<IApiResponse>(this.apiUrl + id, message);
   }

   deleteOne(id: string) {
      return this.http.delete<IApiResponse>(this.apiUrl + id);
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
