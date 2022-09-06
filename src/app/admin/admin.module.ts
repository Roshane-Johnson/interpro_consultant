import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { MaterialModule } from 'src/app/modules/material.module';
import { AdminDashboardPage } from './pages/dashboard/dashboard.component';
import { AdminNotFoundPage } from './pages/not-found/not-found.component';
import { AdminQuotesPageComponent } from './pages/admin-quotes-page/admin-quotes-page.component';
import { FormsModule } from '@angular/forms';
import { AdminQuoteDeleteComponent } from './components/admin-quote-delete/admin-quote-delete.component';
import { AdminQuoteDetailsComponent } from './components/admin-quote-details/admin-quote-details.component';
import { AdminQuoteChangeStatusComponent } from './components/admin-quote-change-status/admin-quote-change-status.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../interceptors/auth.interceptor';
import { AdminGuard } from '../guards/admin.guard';
import { AdminMessagesPageComponent } from './pages/admin-messages-page/admin-messages-page.component';

@NgModule({
   declarations: [
      AdminComponent,
      AdminDashboardPage,
      AdminNotFoundPage,
      AdminQuotesPageComponent,
      AdminQuoteDeleteComponent,
      AdminQuoteDetailsComponent,
      AdminQuoteChangeStatusComponent,
      AdminMessagesPageComponent,
   ],
   imports: [CommonModule, AdminRoutingModule, MaterialModule, FormsModule],
   providers: [
      AdminGuard,
      {
         provide: HTTP_INTERCEPTORS,
         useClass: AuthInterceptor,
         multi: true,
      },
   ],
})
export class AdminModule {}
