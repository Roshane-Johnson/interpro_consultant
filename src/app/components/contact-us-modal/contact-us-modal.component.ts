import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IMessage } from 'src/app/interfaces/api-message';
import { ApiResponse } from 'src/app/interfaces/api-response';
import { HelperService } from 'src/app/services/helper.service';
import { MessageService } from 'src/app/services/messages.service';

@Component({
   templateUrl: './contact-us-modal.component.html',
   styleUrls: ['./contact-us-modal.component.scss'],
})
export class ContactUsModalComponent implements OnInit {
   constructor(
      private messageService: MessageService,
      private helper: HelperService
   ) {}

   field = new FormControl('');

   ngOnInit(): void {}

   onSubmit(formData: IMessage): void {
      this.messageService.createOne(formData).subscribe((resp: ApiResponse) => {
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
