import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IMessage } from 'src/app/interfaces/api-message';
import { IQuote } from 'src/app/interfaces/api-quote';
import { IApiResponse } from 'src/app/interfaces/api-response';
import { MessageService } from 'src/app/services/messages.service';
import { AdminQuoteChangeStatusComponent } from '../../components/admin-quote-change-status/admin-quote-change-status.component';
import { AdminQuoteDeleteComponent } from '../../components/admin-quote-delete/admin-quote-delete.component';
import { AdminQuoteDetailsComponent } from '../../components/admin-quote-details/admin-quote-details.component';

@Component({
   templateUrl: './admin-messages-page.component.html',
   styleUrls: ['./admin-messages-page.component.scss'],
})
export class AdminMessagesPageComponent implements OnInit {
   messages: IMessage[] = [];
   fetchCompleted: boolean = false;

   constructor(private message: MessageService, private modal: MatDialog) {}

   /**
    * Opens the modal with all information about an item
    * @param id Message Id
    */
   openDetailsModal(id: string | undefined): void {
      this.modal.open(AdminQuoteDetailsComponent, {
         width: '610px',
         data: id,
         panelClass: 'simple-dialog',
      });
   }

   /**
    * Opens the modal to confirm the update request of an item
    * @param id Message Id
    * @param status Updated status
    */
   openUpdateModal(id: string | undefined, status: string | undefined) {
      this.modal.open(AdminQuoteChangeStatusComponent, {
         data: { id, status },
      });
   }

   /**
    * Opens the modal to confirm the delete request of an item
    * @param id Message Id
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
      this.message.getAll().subscribe({
         next: (resp: IApiResponse) => {
            this.fetchCompleted = false;
            this.messages = [...this.messages, ...(resp.data as IQuote[])];
            this.fetchCompleted = true;
         },
         error: (err: any) => console.error(err),
      });
   }

   ngOnInit(): void {
      this.getQuotes();
   }
}
