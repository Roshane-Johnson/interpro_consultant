import { Component, OnInit } from '@angular/core';

@Component({
   templateUrl: './dashboard.component.html',
   styleUrls: ['./dashboard.component.scss'],
})
export class AdminDashboardPage implements OnInit {
   stats = {
      requests: 236,
      questions: 457,
   };

   constructor() {}

   ngOnInit(): void {}
}
