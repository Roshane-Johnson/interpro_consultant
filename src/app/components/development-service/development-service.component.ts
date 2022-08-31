import { Component, Input, OnInit } from '@angular/core';
import { PriceTableItem } from 'src/app/interfaces/price-table-item';

@Component({
   selector: 'app-development-service',
   templateUrl: './development-service.component.html',
   styleUrls: ['./development-service.component.scss'],
})
export class DevelopmentServiceComponent implements OnInit {
   constructor() {}

   ngOnInit(): void {}

   @Input() priceTables!: PriceTableItem[];
   @Input() plans!: string[];
}
