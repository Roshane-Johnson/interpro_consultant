import { HttpEvent } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
   selector: 'app-header',
   templateUrl: './header.component.html',
   styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
   constructor() {}

   ngOnInit(): void {}

   @HostListener('window:scroll', ['$event']) onWindowScroll(event: any) {
      const navBar = document.querySelector('.navbar') as HTMLElement;
      const scrolledClass = 'navbar--scrolled';

      if (event.target['scrollingElement'].scrollTop > 80) {
         if (navBar.classList.contains(scrolledClass) === false) {
            navBar.after(navBar.cloneNode(true));
            navBar.classList.add(scrolledClass);
         }
      } else {
         navBar.classList.remove(scrolledClass);
         const navbars = document.querySelectorAll('.navbar');

         if (navbars.length > 1) {
            navbars.forEach((navbar) => {
               if (document.querySelectorAll('.navbar').length != 1) {
                  navbar.remove();
               }
            });
         }
      }
   }
}
