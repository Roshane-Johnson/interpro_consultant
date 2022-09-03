import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
   templateUrl: './login.component.html',
   styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
   constructor(private authService: AuthService, private router: Router) {}

   loginHandler(user: Partial<IUser>) {
      this.authService.login(user).subscribe({
         next: (resp: any) => {
            if (resp.success && resp.data.token) {
               localStorage.setItem('token', resp.data.token);
               this.router.navigate(['admin', 'dashboard']);
            } else {
               console.error('Login failed!');
            }
         },
         error: (error: any) => console.error(error),
      });
   }

   ngOnInit(): void {}
}
