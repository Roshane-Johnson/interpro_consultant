import { Component, OnInit } from '@angular/core';
import { ApiDevService } from 'src/app/interfaces/api-dev-service';
import { DevServiceService } from 'src/app/services/dev-service.service';

@Component({
   templateUrl: './get-a-quote.component.html',
   styleUrls: ['./get-a-quote.component.scss'],
})
export class GetAQuoteComponent implements OnInit {
   services: ApiDevService[] = [];

   constructor(private apiDevService: DevServiceService) {}

   ngOnInit(): void {
      this.apiDevService.getAll().subscribe((resp: any) => {
         this.services = resp.data;
      });
   }
}
