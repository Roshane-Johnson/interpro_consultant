import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminQuotesPageComponent } from './admin-quotes-page.component';

describe('AdminRequestsPageComponent', () => {
   let component: AdminQuotesPageComponent;
   let fixture: ComponentFixture<AdminQuotesPageComponent>;

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         declarations: [AdminQuotesPageComponent],
      }).compileComponents();
   });

   beforeEach(() => {
      fixture = TestBed.createComponent(AdminQuotesPageComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
