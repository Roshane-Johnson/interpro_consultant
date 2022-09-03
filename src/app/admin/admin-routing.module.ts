import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../guards/admin.guard';
import { LoginComponent } from '../pages/login/login.component';
import { AdminComponent } from './admin.component';
import { AdminQuotesPageComponent } from './pages/admin-quotes-page/admin-quotes-page.component';
import { AdminDashboardPage } from './pages/dashboard/dashboard.component';
import { AdminNotFoundPage } from './pages/not-found/not-found.component';

const routes: Routes = [
   {
      path: '',
      component: AdminComponent,
      canActivate: [AdminGuard],
      children: [
         { path: '', redirectTo: 'dashboard' },
         { path: 'dashboard', component: AdminDashboardPage },
         { path: 'quotes', component: AdminQuotesPageComponent },
         { path: 'not-found', component: AdminNotFoundPage },
      ],
   },
   { path: 'login', component: LoginComponent },
   { path: '**', redirectTo: 'not-found' },
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule],
})
export class AdminRoutingModule {}
