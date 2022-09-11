import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IQuote } from 'src/app/interfaces/api-quote';
import { IApiResponse } from 'src/app/interfaces/api-response';
import { QuoteService } from 'src/app/services/quote.service';
import { AdminQuoteChangeStatusComponent } from '../../components/admin-quote-change-status/admin-quote-change-status.component';
import { AdminQuoteDeleteComponent } from '../../components/admin-quote-delete/admin-quote-delete.component';
import { AdminQuoteDetailsComponent } from '../../components/admin-quote-details/admin-quote-details.component';

@Component({
   templateUrl: './admin-quotes-page.component.html',
   styleUrls: ['./admin-quotes-page.component.scss'],
})
export class AdminQuotesPageComponent implements OnInit {
   quotes: IQuote[] = [];
   fetchCompleted: boolean = false;
   sortBy = 'fullName';
   reverseMode = false;

   constructor(private quoteService: QuoteService, private modal: MatDialog) {}
   /**
    * Parses the given quote to a link for "mailto:" usage
    * @param quote Quote used to make link
    * @returns string
    */
   quickEmailLink(quote: IQuote): string {
      const subject = quote.email + ' - Quote Reply';
      return `mailto:${quote.email}?subject=${subject}`;
   }

   /**
    * Opens the modal with all information about an item
    * @param id Quote Id
    */
   openDetailsModal(id: string | undefined): void {
      this.modal.open(AdminQuoteDetailsComponent, {
         data: id,
         width: '610px',
         panelClass: 'simple-dialog',
      });
   }

   /**
    * Opens the modal to confirm the update request of an item
    * @param id Quote Id
    * @param status Updated status
    */
   openUpdateModal(id: string | undefined, status: string | undefined) {
      this.modal.open(AdminQuoteChangeStatusComponent, {
         data: { id, status },
      });
   }

   /**
    * Opens the modal to confirm the delete request of an item
    * @param id Quote Id
    */
   openDeleteModal(id: string | undefined) {
      if (id) {
         this.modal.open(AdminQuoteDeleteComponent, { data: id });
      }
   }

   /**
    * Fetch all quotes from the server then appends it to a global variable
    */
   getQuotes(): void {
      this.quoteService.getAll().subscribe({
         next: (resp: IApiResponse) => {
            this.fetchCompleted = false;
            this.quotes = [...this.quotes, ...(resp.data as IQuote[])];
            this.fetchCompleted = true;
         },
         error: (err) => console.error(err),
      });
   }

   ngOnInit(): void {
      this.getQuotes();
   }
}
