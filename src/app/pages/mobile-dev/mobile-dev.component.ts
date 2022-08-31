import { Component, OnInit } from '@angular/core';
import { PaymentPeriod } from 'src/app/enums/payment-period.enum';
import { PriceTableItem } from 'src/app/interfaces/price-table-item';
import { Section } from 'src/app/interfaces/section';

@Component({
   selector: 'app-mobile-dev',
   templateUrl: './mobile-dev.component.html',
   styleUrls: ['./mobile-dev.component.scss'],
})
export class MobileDevComponent implements OnInit {
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
            { title: 'High-quality Image Resolution', isActive: true },
            { title: 'Mobile responsive', isActive: true },
            { title: 'Use of Responsive App Design', isActive: false },
            { title: 'Integrate Push Notifications', isActive: false },
            {
               title: 'Incorporate Machine Learning Attributes',
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
            { title: 'High-quality Image Resolution', isActive: true },
            { title: 'Mobile responsive', isActive: true },
            { title: 'Use of Responsive App Design', isActive: true },
            { title: 'Integrate Push Notifications', isActive: true },
            {
               title: 'Incorporate Machine Learning Attributes',
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
            { title: 'High-quality Image Resolution', isActive: true },
            { title: 'Mobile responsive', isActive: true },
            { title: 'Use of Responsive App Design', isActive: true },
            { title: 'Integrate Push Notifications', isActive: true },
            {
               title: 'Incorporate Machine Learning Attributes',
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
            { title: 'High-quality Image Resolution', isActive: true },
            { title: 'Mobile responsive', isActive: true },
            { title: 'Use of Responsive App Design', isActive: true },
            { title: 'Integrate Push Notifications', isActive: true },
            {
               title: 'Incorporate Machine Learning Attributes',
               isActive: true,
            },
            {
               title: 'Integration of Augmented Reality in Multiple Systems',
               isActive: true,
            },
            {
               title: 'Provide the Ability for Apps to Work Offline',
               isActive: true,
            },
         ],
      },
   ];

   normalSection: Section = {
      title: 'Mobile Application Development',
      subTitle: 'service',
      content:
         'With deep experience in mobile development, our software solutions are scalable, flexible, and most importantly, secure.',
      color: 'mediumseagreen',
      icon: 'phonelink_setup',
      imageUrl: '/assets/man_coding2.jpg',
      isTopRated: false,
   };
}
