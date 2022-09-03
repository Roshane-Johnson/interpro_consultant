import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiDevService } from '../interfaces/api-dev-service';
import { ApiResponse } from '../interfaces/api-response';
@Injectable({
   providedIn: 'root',
})
export class DevServiceService {
   baseUrl = environment.baseUrl;

   constructor(private http: HttpClient) {}

   getAll() {
      return this.http.get<ApiResponse>(this.baseUrl + '/services');
   }
}
