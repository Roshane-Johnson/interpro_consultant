import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IMessage } from 'src/app/interfaces/api-message';
import { IApiResponse } from 'src/app/interfaces/api-response';
import { MessageService } from 'src/app/services/messages.service';

@Component({
   selector: 'app-admin-message-details',
   templateUrl: './admin-message-details.component.html',
   styleUrls: ['./admin-message-details.component.scss'],
})
export class AdminMessageDetailsComponent implements OnInit {
   message!: IMessage;

   constructor(
      @Inject(MAT_DIALOG_DATA) public id: string,
      private messageService: MessageService
   ) {}

   getMessage() {
      this.messageService.getOne(this.id).subscribe({
         next: (resp: IApiResponse) => {
            this.message = resp.data as IMessage;
         },
         error: (err) => console.error(err),
      });
   }

   ngOnInit(): void {
      this.getMessage();
   }
}
