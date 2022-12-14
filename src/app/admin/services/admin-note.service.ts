import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from 'src/app/interfaces/api-response';
import { environment } from 'src/environments/environment';

@Injectable({
   providedIn: 'root',
})
export class AdminNoteService {
   constructor(private http: HttpClient) {}

   baseUrl = environment.baseUrl;

   getNote(): Observable<ApiResponse> {
      return this.http.get<ApiResponse>(this.baseUrl + '/admin/note');
   }

   updateNote(note: string): Observable<ApiResponse> {
      return this.http.patch<ApiResponse>(this.baseUrl + '/admin/note', {
         note,
      });
   }
}
