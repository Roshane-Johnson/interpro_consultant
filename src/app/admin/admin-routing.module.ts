import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminRequestsPageComponent } from './pages/admin-requests-page/admin-requests-page.component';
import { AdminDashboardPage } from './pages/dashboard/dashboard.component';
import { AdminNotFoundPage } from './pages/not-found/not-found.component';

const routes: Routes = [
   {
      path: '',
      component: AdminComponent,
      children: [
         { path: '', component: AdminDashboardPage },
         { path: 'dashboard', component: AdminDashboardPage },
         { path: 'requests', component: AdminRequestsPageComponent },
         { path: 'not-found', component: AdminNotFoundPage },
         { path: '**', redirectTo: 'not-found' },
      ],
   },
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule],
})
export class AdminRoutingModule {}
