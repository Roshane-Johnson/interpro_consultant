import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IApiResponse } from '../interfaces/api-response';
@Injectable({
   providedIn: 'root',
})
export class MessageLogService {
   baseUrl = environment.baseUrl + '/message-logs/';

   constructor(private http: HttpClient) {}

   // createOne(messageLog: IMessageLog) {
   //    return this.http.post<IApiResponse>(this.baseUrl, messageLog);
   // }

   // getAll() {
   //    return this.http.get<IApiResponse>(this.baseUrl);
   // }

   // getOne(id: string) {
   //    return this.http.get<IApiResponse>(this.baseUrl + id);
   // }

   // updateOne(id: string, messageLog: IMessageLog) {
   //    return this.http.patch<IApiResponse>(this.baseUrl + id, messageLog);
   // }

   // deleteOne(id: string) {
   //    return this.http.delete<IApiResponse>(this.baseUrl + id);
   // }

   total() {
      return this.http.get<IApiResponse>(this.baseUrl + 'total');
   }
}
