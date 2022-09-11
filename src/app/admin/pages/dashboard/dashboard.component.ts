import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IApiResponse } from 'src/app/interfaces/api-response';
import { AuthService } from 'src/app/services/auth.service';
import { DevServiceService } from 'src/app/services/dev-service.service';
import { HelperService } from 'src/app/services/helper.service';
import { MessageLogService } from 'src/app/services/message-log.service';
import { QuoteService } from 'src/app/services/quote.service';
import { AdminNoteService } from '../../services/admin-note.service';

@Component({
   templateUrl: './dashboard.component.html',
   styleUrls: ['./dashboard.component.scss'],
})
export class AdminDashboardPage implements OnInit {
   stats = {
      quotes: 0,
      questions: 0,
      popularService: 'Web Development',
      notificationsSent: 0,
   };
   services: any[] = [];
   serviceUrls = [
      '/services/website-development',
      '/services/mobile-application-development',
      '/services/website-hosting',
      '/services/api-development',
   ];
   adminNote!: string;
   authUser!: any;

   constructor(
      private quoteService: QuoteService,
      private apiDevService: DevServiceService,
      private messageLogService: MessageLogService,
      private adminNoteService: AdminNoteService,
      private helper: HelperService,
      private authSevice: AuthService
   ) {}

   getTotals(): void {
      this.quoteService.getAll().subscribe({
         next: (resp: IApiResponse) => {
            this.stats.quotes = resp.data['length'];
         },
         error: (error: HttpErrorResponse) => console.dir(error),
      });

      this.messageLogService.total().subscribe({
         next: (resp: IApiResponse) => {
            this.stats.notificationsSent = resp.data['total'];
         },
         error: (error: HttpErrorResponse) => console.dir(error),
      });
   }

   getServices() {
      this.apiDevService.getAll().subscribe({
         next: (resp: IApiResponse) => {
            this.services = resp.data as any[];
            this.services.forEach((service: any, index: number) => {
               service.url = this.serviceUrls[index];
            });
         },
         error: (error: HttpErrorResponse) => console.dir(error),
      });
   }

   getAdminNote() {
      this.adminNoteService.getNote().subscribe((resp: IApiResponse) => {
         this.adminNote = resp.data[0] && resp.data[0].note;
      });
   }

   saveAdminNote(note: string) {
      this.adminNoteService.updateNote(note).subscribe((resp: IApiResponse) => {
         if (resp.success)
            this.helper.sendNotification('Admin note saved', 'success');
         else if (resp.success == false)
            this.helper.sendNotification(
               'Admin note failed to saved',
               'warning'
            );
         else
            this.helper.sendNotification(
               'Unknow error saving admin note',
               'error'
            );
      });
   }

   getAdmin(): void {
      this.authSevice.getAuthUser().subscribe({
         next: (resp: IApiResponse) => {
            if (resp.success) this.authUser = resp.data;
         },
         error: (error: HttpErrorResponse) => {
            console.log(error);
         },
      });
   }

   ngOnInit(): void {
      this.getTotals();
      this.getServices();
      this.getAdminNote();
      this.getAdmin();
   }
}
