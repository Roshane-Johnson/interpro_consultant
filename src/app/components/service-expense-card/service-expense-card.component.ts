import { Component, Input, OnInit } from '@angular/core';
import { PriceTableItem } from 'src/app/interfaces/price-table-item';

@Component({
   selector: 'app-service-expense-card',
   templateUrl: './service-expense-card.component.html',
   styleUrls: ['./service-expense-card.component.scss'],
})
export class ServiceExpenseCardComponent implements OnInit {
   @Input() priceTable: PriceTableItem = new PriceTableItem();

   constructor() {}

   ngOnInit(): void {}
}
