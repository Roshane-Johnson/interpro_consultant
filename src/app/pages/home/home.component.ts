import { Section } from './../../interfaces/section';
import { Card } from 'src/app/interfaces/card.type';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TooltipPosition } from '@angular/material/tooltip';
import {} from 'src/app/interfaces/dev-service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
   templateUrl: './home.component.html',
   styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
   @ViewChild('expertiseSection')
   ourExpertiseSection!: ElementRef<HTMLDivElement>;

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
      color: '#00d900',
      imageUrl: '/assets/man_coding2.jpg',
   };

   formData = new FormGroup({
      email: new FormControl('', [
         Validators.required,
         Validators.minLength(10),
         Validators.email,
      ]),
   });

   get form() {
      return this.formData.controls;
   }

   isOddNumber(num: number) {
      return num % 2 == 0 ? true : false;
   }

   scrollDown() {
      this.ourExpertiseSection.nativeElement.scrollIntoView({
         behavior: 'smooth',
         block: 'center',
      });
   }

   constructor() {}

   ngOnInit(): void {}
}
