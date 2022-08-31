import { Component, OnInit } from '@angular/core';
import { PaymentPeriod } from 'src/app/enums/payment-period.enum';
import { PriceTableItem } from 'src/app/interfaces/price-table-item';
import { Section } from 'src/app/interfaces/section';

@Component({
   selector: 'app-api-dev',
   templateUrl: './api-dev.component.html',
   styleUrls: ['./api-dev.component.scss'],
})
export class ApiDevComponent implements OnInit {
   constructor() {}

   ngOnInit(): void {}

   normalSection: Section = {
      title: 'API Development',
      subTitle: 'service',
      content:
         'We specialize in developing enterprise-grade REST APIs. Using REST APIs you’ll be able to connect applications across your business and analyze data in a way that will revolutionize your decision-making processes.',
      color: '#f44336',
      icon: 'developer_mode',
      imageUrl: '/assets/woman_server-room.jpg',
      isTopRated: true,
   };

   plans: string[] = ['Basic', 'Premium', 'Enterprise', 'Custom Solution'];
   priceTables: PriceTableItem[] = [
      {
         plan: 'Basic',
         color: 'mediumseagreen',
         url: 'https://www.google.com/search?q=Contact+for+InterProConsultant',
         callToAction: "Let's Talk",
         subscription: {
            price: 200,
            period: PaymentPeriod.MONTH.toLowerCase(),
         },
         features: [
            { title: 'JSON support / REST', isActive: true },
            { title: 'Good documentation', isActive: true },
            { title: 'Error handling', isActive: true },
            { title: 'Sorting', isActive: false },
            { title: 'Authorization via OAuth', isActive: false },
            { title: "Tools to migrate api's", isActive: false },
         ],
      },
      {
         plan: 'Premium',
         color: '#c600cd',
         url: 'https://www.google.com/search?q=Contact+for+InterProConsultant',
         callToAction: "Let's Talk",
         subscription: {
            price: 400,
            period: PaymentPeriod.MONTH.toLowerCase(),
         },
         features: [
            { title: 'JSON support / REST', isActive: true },
            { title: 'Good documentation', isActive: true },
            { title: 'Error handling', isActive: true },
            { title: 'Sorting', isActive: true },
            { title: 'Authorization via OAuth', isActive: false },
            { title: "Tools to migrate api's", isActive: false },
         ],
      },
      {
         plan: 'Enterprise',
         color: 'dodgerblue',
         url: 'https://www.google.com/search?q=Contact+for+InterProConsultant',
         callToAction: "Let's Talk",
         subscription: {
            price: 400,
            period: PaymentPeriod.MONTH.toLowerCase(),
         },
         features: [
            { title: 'JSON support / REST', isActive: true },
            { title: 'Good documentation', isActive: true },
            { title: 'Error handling', isActive: true },
            { title: 'Sorting', isActive: true },
            { title: 'Authorization via OAuth', isActive: true },
            { title: "Tools to migrate api's", isActive: true },
         ],
      },
      {
         plan: 'Custom Solution',
         color: '#ffaa01',
         url: 'https://www.google.com/search?q=Contact+for+InterProConsultant',
         callToAction: "Let's Talk",
         subscription: {
            price: 20_000,
            period: PaymentPeriod.MONTH.toLowerCase(),
         },
         features: [
            { title: 'JSON Support / REST', isActive: true },
            { title: 'Good Documentation', isActive: true },
            { title: 'Error Handling', isActive: true },
            { title: 'Sorting', isActive: true },
            { title: 'Authorization via OAuth', isActive: true },
            { title: "Tools to Migrate API's", isActive: true },
            { title: 'Robust API Design', isActive: true },
            { title: 'Custom Endpoints', isActive: true },
         ],
      },
   ];
}
