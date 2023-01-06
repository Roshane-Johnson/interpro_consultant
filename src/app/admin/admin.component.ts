import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Observable, startWith } from 'rxjs';
import { IQuote } from '../interfaces/api-quote';
import { ApiResponse } from '../interfaces/api-response';
import { AuthService } from '../services/auth.service';
import { HelperService } from '../services/helper.service';
import { AdminRoute } from './interfaces/admin-route';

@Component({
   selector: 'app-admin',
   templateUrl: './admin.component.html',
   styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
   myControl = new FormControl();
   options: IQuote[] = [];

   filteredOptions: Observable<IQuote[]> = <Observable<IQuote[]>>{};
   //

   displayFn(quote: IQuote): string {
      return quote && quote.fullName ? quote.fullName : '';
   }

   private _filter(fullName: string): IQuote[] {
      const filterValue = fullName.toLowerCase();

      return this.options.filter((option) =>
         option.fullName.toLowerCase().includes(filterValue)
      );
   }

   //

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
      this.authService.getAuthUser().subscribe((resp: ApiResponse) => {
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

      this.filteredOptions = this.myControl.valueChanges.pipe(
         startWith(''),
         map((value) => (typeof value === 'string' ? value : value.fullName)),
         map((name) => (name ? this._filter(name) : this.options.slice()))
      );
   }
}
