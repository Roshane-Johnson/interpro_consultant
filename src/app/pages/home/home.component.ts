import { Section } from './../../interfaces/section';
import { Card } from 'src/app/interfaces/card.type';
import { Component, OnInit } from '@angular/core';
import { TooltipPosition } from '@angular/material/tooltip';

@Component({
   templateUrl: './home.component.html',
   styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
   isOddNumber(num: number) {
      return num % 2 == 0 ? true : false;
   }

   tooltipPosition: TooltipPosition = 'above';

   cards: Card[] = [
      {
         title: 'Innovative application design',
         subTitle: 'Innovative',
         content:
            'We create innovative application design to keep up with world standards and trending technology as soon as they are approved and or stabilize for enterprise level applications.',
         color: 'dodgerblue',
         imageUrl: '/assets/man_coding.jpg',
      },
      {
         title: 'Immaculate dedicated teams',
         subTitle: 'Teams',
         content:
            'InterPro has a dedicated team for every technology and every service that we provide. This is done to ensure we have the latest stable trends and technologies incorporated in house and in your applications.',
         color: '#ff348a',
         videoUrl:
            '/assets/videos/mixkit-young-business-team-discuss-design-in-modern-office-13327-medium.mp4',
      },
      // {
      // 	title: 'The best price for services',
      // 	subTitle: 'Pricing',
      // 	content:
      // 		"At InterPro we have done our market research and tested other services that claim to have the best pricing, we've come to the conclution that no other service provides as mush value as we do at this price point.",
      // 	color: '#1ad166',
      // 	videoUrl:
      // 		'/assets/videos/mixkit-young-business-team-discuss-design-in-modern-office-13327-medium.mp4',
      // },
      {
         title: 'Consistent on time delivery',
         subTitle: 'On time delivery',
         content:
            'As a startup company we have made it one of our major selling point to deliver promptly to our clients reguardless of the project size, we will provide a timeline and stick to that timeline as much as possible.',
         color: '#ffd334',
         imageUrl: '/assets/man_coding_fast.jpg',
      },
   ];

   sectionInfo: Section = {
      title: 'Why choose InterPro over competitors?',
      subTitle: 'Why us',
      content:
         'As leaders in the website development space, we pool our experiences and knowledge base to your benefit. When you work with InterPro, you gain access to over 2+ years of focused, digital-only agency experience from over 10 employees.',
      color: 'dodgerblue',
      imageUrl: '/assets/man_coding2.jpg',
   };

   constructor() {}

   ngOnInit(): void {}
}
