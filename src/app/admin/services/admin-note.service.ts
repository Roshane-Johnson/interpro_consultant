import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IApiResponse } from 'src/app/interfaces/api-response';
import { environment } from 'src/environments/environment';

@Injectable({
   providedIn: 'root',
})
export class AdminNoteService {
   constructor(private http: HttpClient) {}

   baseUrl = environment.baseUrl;

   getNote(): Observable<IApiResponse> {
      return this.http.get<IApiResponse>(this.baseUrl + '/admin/note');
   }

   updateNote(note: string): Observable<IApiResponse> {
      return this.http.patch<IApiResponse>(this.baseUrl + '/admin/note', {
         note,
      });
   }
}
