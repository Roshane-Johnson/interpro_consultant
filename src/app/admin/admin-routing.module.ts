import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../pages/login/login.component';
import { AdminComponent } from './admin.component';
import { AdminGuard } from './guards/admin.guard';
import { AdminMessagesPageComponent } from './pages/admin-messages-page/admin-messages-page.component';
import { AdminQuotesPageComponent } from './pages/admin-quotes-page/admin-quotes-page.component';
import { AdminDashboardPage } from './pages/dashboard/dashboard.component';
import { AdminNotFoundPage } from './pages/not-found/not-found.component';

const routes: Routes = [
   {
      path: '',
      canActivate: [AdminGuard],
      component: AdminComponent,
      children: [
         { path: '', redirectTo: 'dashboard' },
         {
            path: 'dashboard',
            component: AdminDashboardPage,
         },
         {
            path: 'quotes',
            component: AdminQuotesPageComponent,
         },
         {
            path: 'messages',
            component: AdminMessagesPageComponent,
         },
         {
            path: '**',
            redirectTo: 'not-found',
         },
      ],
   },
   { path: 'login', component: LoginComponent },
   { path: '**', redirectTo: 'admin/dashboard' },
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule],
})
export class AdminRoutingModule {}
