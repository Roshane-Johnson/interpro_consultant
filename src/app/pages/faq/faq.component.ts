import { Component, OnInit } from '@angular/core';

@Component({
   templateUrl: './faq.component.html',
   styleUrls: ['./faq.component.scss'],
})
export class FaqComponent implements OnInit {
   panelOpenState = false;
   faqs = [
      {
         question: 'How much does a new website cost?',
         answer:
            'There’s not one single answer to this question. A website design is quoted based on the needs of each individual project. Every website is unique and requires different components; we design and develop custom websites specifically for your small business. We’ll ask a lot of questions, assess your needs, and give you a quote based on that assessment. Most of our sites run in the $5,000 range, but can be more or less depending on needs.',
      },
      {
         question: 'How long will it take to get a new website?',
         answer:
            'On average, we shoot for a six to eight week turnaround, but the pace of any project is set by each client. How much input you can provide during the initial stages, your availability with feedback, how soon the content is ready – all this affects the speed of completion. The functionality needs may also play a role – more complex sites will take more time to develop.',
      },
      {
         question: 'Do I have to be local to work with you?',
         answer:
            'Nope! We work with clients all over the world. Our whole team works remotely, allowing us to find the absolute best team for our business.',
      },
      {
         question: 'When do I pay?',
         answer:
            'For most projects, equal payments are made at the start, midway, and the end of the project, but we can work with you to set up a schedule that meets your needs. We understand that this is a big investment and want to help you budget for the expense in whatever way possible. We accept checks, PayPal, and all major credit cards.',
      },
      {
         question: 'What if I need help on my site down the road?',
         answer:
            'We are only an email away! We’re here to help you as much or as little as you need, and we won’t disappear once the site is launched. We’ve been doing this for many years, so we aren’t going anywhere anytime soon.',
      },
      {
         question: 'Who writes the content for the site?',
         answer:
            'Usually that is you. You are the expert on your business, so it’s usually best if it comes from you. If you need help, we can recommend copywriters who can help clean up or write original content for you at an additional cost.',
      },
      {
         question: 'Will my website be mobile-friendly?',
         answer:
            'Absolutely! Having a mobile-friendly website is more important than ever! We work hard to ensure your website looks great on a variety of devices.',
      },
      {
         question: 'Will you maintain my site for me?',
         answer:
            'We can! We provide on-going support for many of our clients. Check out our WordPress Support Packages.',
      },
      // {
      //    question: 'Word',
      //    answer: 'word',
      // },
   ];

   constructor() {}

   ngOnInit(): void {}
}
