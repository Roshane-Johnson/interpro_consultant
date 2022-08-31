import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RequestModalComponent } from '../request-modal/request-modal.component';

@Component({
   selector: 'app-header',
   templateUrl: './header.component.html',
   styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, AfterViewInit {
   dropdownOpen = false;

   constructor(public dialog: MatDialog) {}

   ngOnInit(): void {}

   ngAfterViewInit(): void {}

   openRequestModal(): void {
      const dialogRef = this.dialog.open(RequestModalComponent, {
         width: '50%',
      });
      const dialogClosed$ = dialogRef.afterClosed();

      dialogClosed$.subscribe((closed) => {
         console.log('Request Dialog Closed');
      });
   }

   dropdownToggle(event: MouseEvent): void {
      const dropdown = (event.target as HTMLElement).querySelector('.dropdown');
      this.dropdownOpen = !this.dropdownOpen;
      dropdown?.classList.toggle('dropdown--hidden');
   }

   @HostListener('window:scroll', ['$event']) onWindowScroll(event: any) {
      const navbar = document.querySelector('.navbar');
      const scrolledClass = 'navbar--scrolled';
      const placeholderElement = document.createElement('div');

      placeholderElement.classList.add('navbar--placeholder');

      if (event.target['scrollingElement'].scrollTop > 80) {
         // if the navbar not in scroll mode
         if (!navbar?.classList.contains(scrolledClass)) {
            navbar?.after(placeholderElement);
            navbar?.classList.add(scrolledClass);
         }
      } else {
         const navbarPlaceholders = document.querySelectorAll(
            '.navbar--placeholder'
         );

         navbar?.classList.remove(scrolledClass);

         if (navbarPlaceholders.length > 0) {
            navbarPlaceholders.forEach((placeholder) => {
               placeholder.remove();
            });
         }
      }
   }
}
