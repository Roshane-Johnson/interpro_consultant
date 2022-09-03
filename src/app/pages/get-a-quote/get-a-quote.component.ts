import { Component, OnInit } from '@angular/core';
import { ApiDevService } from 'src/app/interfaces/api-dev-service';
import { IQuote } from 'src/app/interfaces/api-quote';
import { ApiResponse } from 'src/app/interfaces/api-response';
import { DevServiceService } from 'src/app/services/dev-service.service';
import { QuoteService } from 'src/app/services/quote.service';

@Component({
   templateUrl: './get-a-quote.component.html',
   styleUrls: ['./get-a-quote.component.scss'],
})
export class GetAQuoteComponent implements OnInit {
   services: ApiDevService[] = [{ name: '-- Select Service --' }];

   constructor(
      private apiDevService: DevServiceService,
      private quoteService: QuoteService
   ) {}

   requestQuote(formData: IQuote) {
      this.quoteService.createOne(formData).subscribe({
         next: (resp: ApiResponse) => {
            if (resp.message?.includes('success')) {
               window.location.reload();
            }
         },
         error: (err) => console.error(err),
      });
   }

   ngOnInit(): void {
      this.apiDevService.getAll().subscribe((resp: ApiResponse) => {
         this.services = [...this.services, ...resp.data];
      });
   }
}
