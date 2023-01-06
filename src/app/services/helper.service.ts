import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Injectable({
   providedIn: 'root',
})
export class HelperService {
   constructor() {}

   /**
    * Converts seconds to milliseconds
    * @param second seconds being converted to milliseconds
    */
   secondsToMilliseconds(second: number): number {
      return second * 1000;
   }

   /**
    * Creates a sweet alert popup
    * @param title Notification message
    * @param icon Notification icon
    */
   sendNotification(title: string, icon: SweetAlertIcon): void {
      Swal.fire({
         icon,
         title,
         toast: true,
         position: 'top-end',
         showConfirmButton: false,
         timer: this.secondsToMilliseconds(1.5),
      });
   }
}
