import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboardPage } from './dashboard.component';

describe('DashboardComponent', () => {
   let component: AdminDashboardPage;
   let fixture: ComponentFixture<AdminDashboardPage>;

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         declarations: [AdminDashboardPage],
      }).compileComponents();
   });

   beforeEach(() => {
      fixture = TestBed.createComponent(AdminDashboardPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
