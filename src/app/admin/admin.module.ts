import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { MaterialModule } from 'src/app/modules/material.module';
import { AdminDashboardPage } from './pages/dashboard/dashboard.component';
import { AdminNotFoundPage } from './pages/not-found/not-found.component';
import { AdminQuotesPageComponent } from './pages/admin-quotes-page/admin-quotes-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminQuoteDeleteComponent } from './components/admin-quote-delete/admin-quote-delete.component';
import { AdminQuoteDetailsComponent } from './components/admin-quote-details/admin-quote-details.component';
import { AdminQuoteChangeStatusComponent } from './components/admin-quote-change-status/admin-quote-change-status.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../interceptors/auth.interceptor';
import { AdminMessagesPageComponent } from './pages/admin-messages-page/admin-messages-page.component';
import { SortPipe } from '../pipes/sort.pipe';
import { AdminMessageDeleteComponent } from './components/admin-message-delete/admin-message-delete.component';
import { AdminMessageDetailsComponent } from './components/admin-message-details/admin-message-details.component';
import { AdminGuard } from './guards/admin.guard';

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
      AdminMessageDeleteComponent,
      AdminMessageDetailsComponent,
      SortPipe,
   ],
   imports: [
      CommonModule,
      AdminRoutingModule,
      MaterialModule,
      ReactiveFormsModule,
      FormsModule,
   ],
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
