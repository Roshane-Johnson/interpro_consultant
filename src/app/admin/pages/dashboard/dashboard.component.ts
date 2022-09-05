import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiDevService } from 'src/app/interfaces/api-dev-service';
import { ApiResponse } from 'src/app/interfaces/api-response';
import { DevService } from 'src/app/interfaces/dev-service';
import { DevServiceService } from 'src/app/services/dev-service.service';
import { QuoteService } from 'src/app/services/quote.service';

@Component({
   templateUrl: './dashboard.component.html',
   styleUrls: ['./dashboard.component.scss'],
})
export class AdminDashboardPage implements OnInit {
   stats = { quotes: 0, questions: 0 };
   services: any[] = [];
   serviceUrls = [
      '/services/website-development',
      '/services/mobile-application-development',
      '/services/website-hosting',
      '/services/api-development',
   ];

   constructor(
      private quoteService: QuoteService,
      private apiDevService: DevServiceService
   ) {}

   total(): void {
      this.quoteService.getAll().subscribe({
         next: (resp: ApiResponse) => {
            console.log(resp);
            this.stats.quotes = resp.data.length;
         },
         error: (error: HttpErrorResponse) => console.dir(error),
      });
   }

   getServices() {
      this.apiDevService.getAll().subscribe({
         next: (resp: ApiResponse) => {
            this.services = resp.data;
            this.services.forEach((service: any, index: number) => {
               service.url = this.serviceUrls[index];
            });
         },
         error: (error: HttpErrorResponse) => console.dir(error),
      });
   }

   ngOnInit(): void {
      this.total();
      this.getServices();
   }
}
