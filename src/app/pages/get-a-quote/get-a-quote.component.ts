import { Component, OnInit } from '@angular/core';
import {
   AbstractControl,
   FormControl,
   FormGroup,
   Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiDevService } from 'src/app/interfaces/api-dev-service';
import { IQuote } from 'src/app/interfaces/api-quote';
import { ApiResponse } from 'src/app/interfaces/api-response';
import { DevServiceService } from 'src/app/services/dev-service.service';
import { HelperService } from 'src/app/services/helper.service';
import { QuoteService } from 'src/app/services/quote.service';
import { environment } from 'src/environments/environment';

@Component({
   templateUrl: './get-a-quote.component.html',
   styleUrls: ['./get-a-quote.component.scss'],
})
export class GetAQuoteComponent implements OnInit {
   services: ApiDevService[] = [];

   constructor(
      private apiDevService: DevServiceService,
      private quoteService: QuoteService,
      private activatedRoute: ActivatedRoute,
      private helper: HelperService
   ) {}

   quoteForm = new FormGroup({
      fullName: new FormControl('', [
         Validators.required,
         Validators.minLength(6),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phoneNumber: new FormControl(''),
      service: new FormControl('', [Validators.required]),
      company: new FormControl(''),
      budget: new FormControl(''),
      message: new FormControl(''),
   });

   get form() {
      return this.quoteForm;
   }

   prefillEmail(): void {
      const queryParams$ = this.activatedRoute.queryParams;

      queryParams$.subscribe((params: any) => {
         if (params['email'])
            this.quoteForm.get('email')?.setValue(params['email']);
      });
   }

   requestQuote(formData: IQuote) {
      this.quoteForm.disable();

      this.quoteService.createOne(formData).subscribe({
         next: (resp: ApiResponse) => {
            if (resp.success === true) {
               this.helper.sendNotification(
                  'Your quote request has been sent!',
                  'success'
               );

               setTimeout(() => {
                  window.location.reload();
               }, this.helper.secondsToMilliseconds(2));
            }
         },
         error: (err) => {
            if (environment.production == false) console.error(err);
            console.error('Error requesting quote');
            this.helper.sendNotification(
               'Something went worng on our end, a refresh might solve this problem',
               'error'
            );
         },
      });
   }

   ngOnInit(): void {
      this.prefillEmail();

      this.apiDevService.getAll().subscribe((resp: ApiResponse) => {
         this.services = [...this.services, ...(resp.data as ApiDevService[])];
      });
   }
}
