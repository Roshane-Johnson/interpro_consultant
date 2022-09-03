import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IQuote } from 'src/app/interfaces/api-quote';
import { ApiResponse } from 'src/app/interfaces/api-response';
import { QuoteService } from 'src/app/services/quote.service';

@Component({
   selector: 'app-admin-quote-change-status',
   templateUrl: './admin-quote-change-status.component.html',
   styleUrls: ['./admin-quote-change-status.component.scss'],
})
export class AdminQuoteChangeStatusComponent implements OnInit {
   quote!: IQuote;

   constructor(
      @Inject(MAT_DIALOG_DATA) public data: { id: string; status: string },
      private quoteService: QuoteService
   ) {}

   updateStatus(): void {
      this.quote.status =
         this.data.status == 'inactive' ? 'active' : 'inactive';
      this.quoteService.updateOne(this.data.id, this.quote).subscribe({
         next: (resp: ApiResponse) => {
            if (resp.status == 200) {
               return window.location.reload();
            }

            console.log(resp);
         },
         error: (err) => console.error(err),
      });
   }

   getQuote(): void {
      this.quoteService.getOne(this.data.id).subscribe({
         next: (resp: ApiResponse) => {
            this.quote = resp.data;
         },
         error: (err) => console.error(err),
      });
   }

   ngOnInit(): void {
      this.getQuote();
   }
}
