import { Component, OnInit } from '@angular/core';

@Component({
   templateUrl: './request-modal.component.html',
   styleUrls: ['./request-modal.component.scss'],
})
export class RequestModalComponent implements OnInit {
   constructor() {}

   ngOnInit(): void {}

   submitMessage(contactFormData: any): void {
      console.log(contactFormData);
   }
}
