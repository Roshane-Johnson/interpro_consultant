import { Component, OnInit } from '@angular/core';
import { PaymentPeriod } from 'src/app/enums/payment-period.enum';
import { PriceTableItem } from 'src/app/interfaces/price-table-item';
import { Section } from 'src/app/interfaces/section';

@Component({
   selector: 'app-web-hosting',
   templateUrl: './web-hosting.component.html',
   styleUrls: ['./web-hosting.component.scss'],
})
export class WebHostingComponent implements OnInit {
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
            { title: 'Single website', isActive: true },
            { title: 'One-click WordPress installs', isActive: true },
            {
               title: 'Free WordPress/cPanel website transfer',
               isActive: true,
            },
            { title: 'Unmetered bandwidth', isActive: false },
            {
               title: 'Free SSL certificate',
               isActive: false,
            },
            {
               title: 'Free domain included',
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
            { title: 'Single website', isActive: true },
            { title: 'One-click WordPress installs', isActive: true },
            {
               title: 'Free WordPress/cPanel website transfer',
               isActive: true,
            },
            { title: 'Unmetered bandwidth', isActive: true },
            {
               title: 'Free SSL certificate',
               isActive: false,
            },
            {
               title: 'Free domain included',
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
            { title: 'Single website', isActive: true },
            { title: 'One-click WordPress installs', isActive: true },
            {
               title: 'Free WordPress/cPanel website transfer',
               isActive: true,
            },
            { title: 'Unmetered bandwidth', isActive: true },
            {
               title: 'Free SSL certificate',
               isActive: true,
            },
            {
               title: 'Free domain included',
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
            price: 20_000,
            period: PaymentPeriod.MONTH.toLowerCase(),
         },
         features: [
            { title: 'Single website', isActive: true },
            { title: 'One-click WordPress installs', isActive: true },
            {
               title: 'Free WordPress/cPanel website transfer',
               isActive: true,
            },
            { title: 'Unmetered bandwidth', isActive: true },
            {
               title: 'Free SSL certificate',
               isActive: true,
            },
            {
               title: 'Free upgrade to Positive SSL',
               isActive: true,
            },
            {
               title: 'Free dedicated IP',
               isActive: true,
            },
            {
               title: 'Free SEO tools',
               isActive: true,
            },
            {
               title: 'Free domain included',
               isActive: true,
            },
         ],
      },
   ];

   normalSection: Section = {
      title: 'Web Hosting',
      subTitle: 'service',
      content:
         'With deep experience in website hosting, our hosting solutions are scalable, flexible, and most importantly, secure.',
      color: '#f44336',
      icon: 'dynamic_form',
      imageUrl: '/assets/woman_server-room.jpg',
      isTopRated: false,
   };
}
