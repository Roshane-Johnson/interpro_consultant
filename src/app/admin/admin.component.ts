import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IApiResponse } from '../interfaces/api-response';
import { AuthService } from '../services/auth.service';
import { HelperService } from '../services/helper.service';
import { AdminRoute } from './interfaces/admin-route';

@Component({
   selector: 'app-admin',
   templateUrl: './admin.component.html',
   styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
   showFiller = false;
   authUser!: any;

   navItems: AdminRoute[] = [
      { path: 'dashboard', name: 'Dashboard', icon: 'home' },
      { path: 'quotes', name: 'Quote Requests', icon: 'pending_actions' },
      { path: 'messages', name: 'Contact Messages', icon: 'question_answer' },
   ];

   constructor(
      private authService: AuthService,
      private router: Router,
      private helper: HelperService
   ) {}

   getAdmin() {
      this.authService.getAuthUser().subscribe((resp: IApiResponse) => {
         if (resp.success) this.authUser = resp.data;
         if (resp.success == false)
            this.helper.sendNotification('Error getting admin', 'error');
      });
   }

   logout() {
      this.authService.logout();
      this.router.navigate(['/']);
   }

   ngOnInit(): void {
      this.getAdmin();
   }
}
