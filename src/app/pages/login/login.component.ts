import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IApiResponse } from 'src/app/interfaces/api-response';
import { IUser } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';
import { HelperService } from 'src/app/services/helper.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
   templateUrl: './login.component.html',
   styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
   hide = true;

   constructor(
      private authService: AuthService,
      private router: Router,
      private helper: HelperService
   ) {}

   formData = new FormGroup({
      email: new FormControl('', [
         Validators.required,
         Validators.email,
         Validators.minLength(10),
      ]),
      password: new FormControl('', [
         Validators.required,
         Validators.minLength(8),
      ]),
   });

   get form() {
      return this.formData.controls;
   }

   loginHandler(user: Pick<IUser, 'email' | 'password'>) {
      this.authService.login(user).subscribe({
         next: (resp: IApiResponse) => {
            if (resp.success === true) {
               this.helper.sendNotification('Login Successful', 'success');

               setTimeout(() => {
                  this.router.navigate(['admin', 'dashboard']);
               }, this.helper.secondsToMilliseconds(2));
            } else {
               this.helper.sendNotification('Login Failed!', 'error');
               this.formData.get('password')?.reset();
            }
         },
         error: (error: any) => console.error(error),
      });
   }

   ngOnInit(): void {}
}
