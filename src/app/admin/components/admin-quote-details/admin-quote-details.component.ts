import {
   ChangeDetectionStrategy,
   Component,
   Inject,
   OnChanges,
   OnInit,
   SimpleChanges,
} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { IQuote } from 'src/app/interfaces/api-quote';
import { ApiResponse } from 'src/app/interfaces/api-response';
import { QuoteService } from 'src/app/services/quote.service';

@Component({
   selector: 'app-admin-quote-details',
   templateUrl: './admin-quote-details.component.html',
   styleUrls: ['./admin-quote-details.component.scss'],
   changeDetection: ChangeDetectionStrategy.Default,
})
export class AdminQuoteDetailsComponent implements OnInit, OnChanges {
   quote!: IQuote;
   quote$: Subscription = <Subscription>{};

   constructor(
      @Inject(MAT_DIALOG_DATA) private id: string,
      private quoteService: QuoteService
   ) {}

   getQuote() {
      this.quote$ = this.quoteService.getOne(this.id).subscribe({
         next: (resp: ApiResponse) => {
            this.quote = resp.data as IQuote;
         },
         error: (err) => console.error(err),
      });
   }

   closeModal() {}

   ngOnInit(): void {
      console.log(this.id);

      this.getQuote();
   }

   ngOnDestroy(): void {
      this.quote$.unsubscribe();
   }

   ngOnChanges(changes: SimpleChanges): void {
      //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
      //Add '${implements OnChanges}' to the class.
      console.log(changes);
   }
}
