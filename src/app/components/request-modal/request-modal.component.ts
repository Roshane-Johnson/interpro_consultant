import { Component, OnInit } from '@angular/core';
import { IMessage } from 'src/app/interfaces/api-message';
import { IApiResponse } from 'src/app/interfaces/api-response';
import { HelperService } from 'src/app/services/helper.service';
import { MessageService } from 'src/app/services/messages.service';

@Component({
   templateUrl: './request-modal.component.html',
   styleUrls: ['./request-modal.component.scss'],
})
export class RequestModalComponent implements OnInit {
   constructor(
      private messageService: MessageService,
      private helper: HelperService
   ) {}

   ngOnInit(): void {}

   onSubmit(formData: IMessage): void {
      this.messageService
         .createOne(formData)
         .subscribe((resp: IApiResponse) => {
            if (resp.success)
               this.helper.sendNotification('Message Sent', 'success');
            else if (resp.success == false)
               this.helper.sendNotification(
                  'Error sending your message',
                  'warning'
               );
            else
               this.helper.sendNotification(
                  'Unknown Error sending your message',
                  'error'
               );
         });
   }
}
