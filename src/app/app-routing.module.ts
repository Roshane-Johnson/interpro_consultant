import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SiteMapComponent } from './components/site-map/site-map.component';
import { ApiDevComponent } from './pages/api-dev/api-dev.component';
import { FaqComponent } from './pages/faq/faq.component';
import { GetAQuoteComponent } from './pages/get-a-quote/get-a-quote.component';
import { HomeComponent } from './pages/home/home.component';
import { MobileDevComponent } from './pages/mobile-dev/mobile-dev.component';
import { WebDevComponent } from './pages/web-dev/web-dev.component';
import { WebHostingComponent } from './pages/web-hosting/web-hosting.component';

const routes: Routes = [
   {
      path: '',
      component: HomeComponent,
   },
   { path: 'faq', component: FaqComponent },
   { path: 'get-a-quote', component: GetAQuoteComponent },
   { path: 'map', component: SiteMapComponent },
   {
      path: 'services',
      children: [
         { path: 'website-development', component: WebDevComponent },
         {
            path: 'mobile-application-development',
            component: MobileDevComponent,
         },
         { path: 'website-hosting', component: WebHostingComponent },
         { path: 'api-development', component: ApiDevComponent },
      ],
   },
   {
      path: 'admin',

      loadChildren: () =>
         import('./admin/admin.module').then((m) => m.AdminModule),
   },
   // { path: '**', pathMatch: 'full' },
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule],
})
export class AppRoutingModule {}
