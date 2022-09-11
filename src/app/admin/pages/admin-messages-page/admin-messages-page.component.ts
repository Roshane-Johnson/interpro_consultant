import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IMessage } from 'src/app/interfaces/api-message';
import { IApiResponse } from 'src/app/interfaces/api-response';
import { MessageService } from 'src/app/services/messages.service';
import { AdminMessageDeleteComponent } from '../../components/admin-message-delete/admin-message-delete.component';
import { AdminMessageDetailsComponent } from '../../components/admin-message-details/admin-message-details.component';

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
      this.modal.open(AdminMessageDetailsComponent, {
         width: '610px',
         data: id,
         panelClass: 'simple-dialog',
      });
   }

   /**
    * Opens the modal to confirm the delete request of an item
    * @param id Message Id
    */
   openDeleteModal(id: string | undefined) {
      if (id) {
         this.modal.open(AdminMessageDeleteComponent, { data: id });
      }
   }

   /**
    * Fetch all quotes from the server then appends it to a global variable
    */
   getMessages(): void {
      this.message.getAll().subscribe({
         next: (resp: IApiResponse) => {
            this.fetchCompleted = false;
            this.messages = [...this.messages, ...(resp.data as IMessage[])];
            this.fetchCompleted = true;
         },
         error: (err: any) => console.error(err),
      });
   }

   ngOnInit(): void {
      this.getMessages();
   }
}
