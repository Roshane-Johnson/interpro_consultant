import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
   constructor(private authService: AuthService) {}

   scrollToTop(): void {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
   }

   ngOnInit(): void {
      this.authService.autoLogout();
   }
}
