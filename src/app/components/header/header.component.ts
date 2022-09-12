import { HttpErrorResponse } from '@angular/common/http';
import {
   AfterViewInit,
   Component,
   ElementRef,
   HostListener,
   OnDestroy,
   OnInit,
   ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IApiResponse } from 'src/app/interfaces/api-response';
import { AuthService } from 'src/app/services/auth.service';
import { ContactUsModalComponent } from '../contact-us-modal/contact-us-modal.component';

@Component({
   selector: 'app-header',
   templateUrl: './header.component.html',
   styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, AfterViewInit {
   isAdmin = false;

   constructor(private dialog: MatDialog, private authSevice: AuthService) {}

   openRequestModal(): void {
      this.dialog.open(ContactUsModalComponent, {
         width: '30%',
      });
   }

   @ViewChild('navbar') navbar!: ElementRef<HTMLElement>;

   @HostListener('window:scroll', ['$event']) onWindowScroll(event: any) {
      const scrolledClass = 'navbar--scrolled';
      const placeholderElement = document.createElement('div');

      placeholderElement.classList.add('navbar--placeholder');

      if (event.target['scrollingElement'].scrollTop > 80) {
         //navbar not in scroll mode
         if (!this.navbar.nativeElement?.classList.contains(scrolledClass)) {
            // add place holder after navbar
            this.navbar.nativeElement?.after(placeholderElement);
            this.navbar.nativeElement?.classList.add(scrolledClass);
         }
      } else {
         const navbarPlaceholders = document.querySelectorAll(
            '.navbar--placeholder'
         );

         this.navbar.nativeElement?.classList.remove(scrolledClass);

         if (navbarPlaceholders.length > 0) {
            navbarPlaceholders.forEach((placeholder) => {
               placeholder.remove();
            });
         }
      }
   }

   getAdmin(): void {
      this.authSevice.getAuthUser().subscribe({
         next: (resp: IApiResponse) => {
            if (
               resp.success &&
               resp.data &&
               resp.data['role']['type'].toLowerCase() === 'admin'
            )
               this.isAdmin = true;
         },
         error: (error: HttpErrorResponse) => {},
      });
   }

   ngOnInit(): void {
      this.getAdmin();
   }

   ngAfterViewInit(): void {}
}
