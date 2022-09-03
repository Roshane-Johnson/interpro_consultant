import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
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
      { path: 'quotes', name: 'Quote Requests', icon: 'pending_actions' },
      //TODO Complete contact messages CRUD
      // { path: 'messages', name: 'Contact Messages', icon: 'question_answer' },
   ];

   constructor(private authService: AuthService, private router: Router) {}

   logout() {
      this.authService.logout();
      this.router.navigate(['/']);
   }

   ngOnInit(): void {}
}
