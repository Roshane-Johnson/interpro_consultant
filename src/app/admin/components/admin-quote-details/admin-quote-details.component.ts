import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IQuote } from 'src/app/interfaces/api-quote';
import { IApiResponse } from 'src/app/interfaces/api-response';
import { QuoteService } from 'src/app/services/quote.service';

@Component({
   selector: 'app-admin-quote-details',
   templateUrl: './admin-quote-details.component.html',
   styleUrls: ['./admin-quote-details.component.scss'],
})
export class AdminQuoteDetailsComponent implements OnInit {
   quote!: IQuote;

   constructor(
      @Inject(MAT_DIALOG_DATA) public id: string,
      private quoteService: QuoteService
   ) {}

   getQuote() {
      this.quoteService.getOne(this.id).subscribe({
         next: (resp: IApiResponse) => {
            this.quote = resp.data as IQuote;
         },
         error: (err) => console.error(err),
      });
   }

   ngOnInit(): void {
      this.getQuote();
   }
}
