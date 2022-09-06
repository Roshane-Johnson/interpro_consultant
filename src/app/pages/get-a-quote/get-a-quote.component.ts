import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiDevService } from 'src/app/interfaces/api-dev-service';
import { IQuote } from 'src/app/interfaces/api-quote';
import { IApiResponse } from 'src/app/interfaces/api-response';
import { DevServiceService } from 'src/app/services/dev-service.service';
import { QuoteService } from 'src/app/services/quote.service';

@Component({
   templateUrl: './get-a-quote.component.html',
   styleUrls: ['./get-a-quote.component.scss'],
})
export class GetAQuoteComponent implements OnInit {
   services: ApiDevService[] = [{ name: '-- Select Service --' }];

   constructor(
      private apiDevService: DevServiceService,
      private quoteService: QuoteService,
      private activatedRoute: ActivatedRoute
   ) {}

   quoteForm = new FormGroup({
      fullName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required]),
      service: new FormControl('', [Validators.required]),
      company: new FormControl('', [Validators.required]),
      budget: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required]),
   });

   prefillEmail(): void {
      const queryParams$ = this.activatedRoute.queryParams;

      queryParams$.subscribe((params: any) => {
         if (params['email'])
            this.quoteForm.get('email')?.setValue(params['email']);
      });
   }

   requestQuote(formData: IQuote) {
      this.quoteService.createOne(formData).subscribe({
         next: (resp: IApiResponse) => {
            if (resp.success === true) {
               window.location.reload();
            }
         },
         error: (err) => console.error(err),
      });
   }

   ngOnInit(): void {
      this.prefillEmail();

      this.apiDevService.getAll().subscribe((resp: IApiResponse) => {
         this.services = [...this.services, ...(resp.data as ApiDevService[])];
      });
   }
}
