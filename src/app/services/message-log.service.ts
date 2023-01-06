import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { take } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiResponse } from '../interfaces/api-response';
@Injectable({
   providedIn: 'root',
})
export class MessageLogService {
   baseUrl = environment.baseUrl + '/message-logs/';

   constructor(private http: HttpClient) {}

   // createOne(messageLog: IMessageLog) {
   //    return this.http.post<IApiResponse>(this.baseUrl, messageLog).pipe(take(1));
   // }

   // getAll() {
   //    return this.http.get<IApiResponse>(this.baseUrl).pipe(take(1));
   // }

   // getOne(id: string) {
   //    return this.http.get<IApiResponse>(this.baseUrl + id).pipe(take(1));
   // }

   // updateOne(id: string, messageLog: IMessageLog) {
   //    return this.http.patch<IApiResponse>(this.baseUrl + id, messageLog).pipe(take(1));
   // }

   // deleteOne(id: string) {
   //    return this.http.delete<IApiResponse>(this.baseUrl + id).pipe(take(1));
   // }

   total() {
      return this.http.get<ApiResponse>(this.baseUrl + 'total').pipe(take(1));
   }
}
