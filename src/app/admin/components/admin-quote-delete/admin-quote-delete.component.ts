import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IQuote } from 'src/app/interfaces/api-quote';
import { ApiResponse } from 'src/app/interfaces/api-response';
import { QuoteService } from 'src/app/services/quote.service';

@Component({
   selector: 'app-admin-quote-delete',
   templateUrl: './admin-quote-delete.component.html',
   styleUrls: ['./admin-quote-delete.component.scss'],
})
export class AdminQuoteDeleteComponent implements OnInit {
   quote!: IQuote;

   constructor(
      @Inject(MAT_DIALOG_DATA) public id: string,
      private quoteService: QuoteService
   ) {}

   getQuote() {
      this.quoteService.getOne(this.id).subscribe({
         next: (resp: ApiResponse) => {
            if (resp.success) this.quote = resp.data as IQuote;
         },
         error: (err) => console.error(err),
      });
   }

   deleteOne() {
      this.quoteService.deleteOne(this.id).subscribe({
         next: (resp: ApiResponse) => {
            if (resp.success) {
               window.location.reload();
            }
         },
         error: (err) => console.error(err),
      });
   }

   ngOnInit(): void {
      this.getQuote();
   }
}
