import { Component, OnInit } from '@angular/core';

@Component({
   templateUrl: './request-modal.component.html',
   styleUrls: ['./request-modal.component.scss'],
})
export class RequestModalComponent implements OnInit {
   constructor() {}

   ngOnInit(): void {}

   onSubmit(formData: any): void {
      console.log('Form Data', formData);
   }
}
