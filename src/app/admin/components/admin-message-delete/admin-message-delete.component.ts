import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { IMessage } from 'src/app/interfaces/api-message';
import { IApiResponse } from 'src/app/interfaces/api-response';
import { MessageService } from 'src/app/services/messages.service';

@Component({
   selector: 'app-admin-message-delete',
   templateUrl: './admin-message-delete.component.html',
   styleUrls: ['./admin-message-delete.component.scss'],
})
export class AdminMessageDeleteComponent implements OnInit {
   message!: IMessage;

   constructor(
      @Inject(MAT_DIALOG_DATA) public id: string,
      private messageService: MessageService,
      private router: Router
   ) {}

   getMessage() {
      this.messageService.getOne(this.id).subscribe({
         next: (resp: IApiResponse) => {
            this.message = resp.data as IMessage;
         },
         error: (err) => console.error(err),
      });
   }

   deleteOne() {
      this.messageService.deleteOne(this.id).subscribe({
         next: (resp: IApiResponse) => {
            if (resp.success) {
               location.reload()
            }
         },
         error: (err) => console.error(err),
      });
   }

   ngOnInit(): void {
      this.getMessage();
   }
}
