import { Component, OnInit } from '@angular/core';
import { PaymentPeriod } from 'src/app/enums/payment-period.enum';
import { PriceTableItem } from 'src/app/interfaces/price-table-item';
import { Section } from 'src/app/interfaces/section';

@Component({
   selector: 'app-web-dev',
   templateUrl: './web-dev.component.html',
   styleUrls: ['./web-dev.component.scss'],
})
export class WebDevComponent implements OnInit {
   constructor() {}

   ngOnInit(): void {}

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
            { title: 'Cross browser compatibility', isActive: true },
            { title: 'Mobile responsive', isActive: true },
            {
               title: 'Optimized for Search Engines',
               isActive: false,
            },
            {
               title: 'Community standard for consumer conversion',
               isActive: false,
            },
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
            { title: 'Cross browser compatibility', isActive: true },
            { title: 'Mobile responsive', isActive: true },
            {
               title: 'Optimized for Search Engines',
               isActive: true,
            },
            {
               title: 'Community standard for consumer conversion',
               isActive: false,
            },
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
            { title: 'Cross browser compatibility', isActive: true },
            { title: 'Mobile responsive', isActive: true },
            {
               title: 'Optimized for Search Engines',
               isActive: true,
            },
            {
               title: 'Community standard for consumer conversion',
               isActive: true,
            },
         ],
      },
      {
         plan: 'Custom Solution',
         color: '#ffaa01',
         url: 'https://www.google.com/search?q=Contact+for+InterProConsultant',
         callToAction: "Let's Talk",
         subscription: {
            price: 400,
            period: PaymentPeriod.MONTH.toLowerCase(),
         },
         features: [
            { title: 'Cross browser compatibility', isActive: true },
            { title: 'Mobile responsive', isActive: true },
            {
               title: 'Optimized for Search Engines',
               isActive: true,
            },
            {
               title: 'Community standard for consumer conversion',
               isActive: true,
            },
            { title: 'Custom features', isActive: true },
            { title: 'Social Media Marketing & Advertising', isActive: true },
            { title: 'Exceptional customer support', isActive: true },
            {
               title: 'Integration of various payment gateways',
               isActive: true,
            },
         ],
      },
   ];

   normalSection: Section = {
      title: 'Website Development',
      subTitle: 'service',
      content:
         'With deep experience in web, mobile, and back-end platforms, our software solutions are scalable, flexible, and most importantly, secure.',
      color: 'dodgerblue',
      icon: 'desktop_mac',
      imageUrl: '/assets/macbooks-with-code.jpg',
      isTopRated: true,
   };
}
