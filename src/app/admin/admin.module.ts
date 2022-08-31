import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { MaterialModule } from 'src/app/modules/material.module';
import { AdminDashboardPage } from './pages/dashboard/dashboard.component';
import { AdminNotFoundPage } from './pages/not-found/not-found.component';
import { AdminRequestsPageComponent } from './pages/admin-requests-page/admin-requests-page.component';

@NgModule({
   declarations: [AdminComponent, AdminDashboardPage, AdminNotFoundPage, AdminRequestsPageComponent],
   imports: [CommonModule, AdminRoutingModule, MaterialModule],
})
export class AdminModule {}
