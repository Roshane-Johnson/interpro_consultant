import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { InfoSectionComponent } from './components/info-section/info-section.component';
import { NormalSectionComponent } from './components/normal-section/normal-section.component';
import { DevelopmentServiceComponent } from './components/development-service/development-service.component';
import { WebDevComponent } from './pages/web-dev/web-dev.component';
import { MobileDevComponent } from './pages/mobile-dev/mobile-dev.component';
import { WebHostingComponent } from './pages/web-hosting/web-hosting.component';
import { ApiDevComponent } from './pages/api-dev/api-dev.component';
import { ServiceExpenseCardComponent } from './components/service-expense-card/service-expense-card.component';
import { FaqComponent } from './pages/faq/faq.component';
import { SiteMapComponent } from './components/site-map/site-map.component';
import { ContactUsModalComponent } from './components/contact-us-modal/contact-us-modal.component';
import { GetAQuoteComponent } from './pages/get-a-quote/get-a-quote.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';

@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      HomeComponent,
      InfoSectionComponent,
      NormalSectionComponent,
      FooterComponent,
      DevelopmentServiceComponent,
      WebDevComponent,
      MobileDevComponent,
      WebHostingComponent,
      ApiDevComponent,
      ServiceExpenseCardComponent,
      FaqComponent,
      SiteMapComponent,
      ContactUsModalComponent,
      GetAQuoteComponent,
      LoginComponent,
   ],
   imports: [
      AppRoutingModule,
      BrowserModule,
      BrowserAnimationsModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
      MaterialModule,
   ],
   providers: [
      {
         provide: HTTP_INTERCEPTORS,
         useClass: AuthInterceptor,
         multi: true,
      },
   ],
   bootstrap: [AppComponent],
   exports: [],
})
export class AppModule {}
