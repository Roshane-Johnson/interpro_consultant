import { Component, OnInit } from '@angular/core';
import { AdminRoute } from './interfaces/admin-route';

@Component({
   selector: 'app-admin',
   templateUrl: './admin.component.html',
   styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
   showFiller = false;

   navItems: AdminRoute[] = [
      { path: 'dashboard', name: 'Dashboard', icon: 'home' },
      { path: 'requests', name: 'Customer Requests', icon: 'pending_actions' },
      { path: 'messages', name: 'Messages', icon: 'question_answer' },
      // { path: '/', name: 'Reports', icon: 'bar_chart  ' },
   ];

   constructor() {}

   ngOnInit(): void {}
}
