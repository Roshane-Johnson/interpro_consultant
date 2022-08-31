import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNotFoundPage } from './not-found.component';

describe('NotFoundComponent', () => {
   let component: AdminNotFoundPage;
   let fixture: ComponentFixture<AdminNotFoundPage>;

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         declarations: [AdminNotFoundPage],
      }).compileComponents();
   });

   beforeEach(() => {
      fixture = TestBed.createComponent(AdminNotFoundPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
