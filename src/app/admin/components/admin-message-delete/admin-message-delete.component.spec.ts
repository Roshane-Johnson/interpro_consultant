import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMessageDeleteComponent } from './admin-message-delete.component';

describe('AdminQuoteDeleteComponent', () => {
   let component: AdminMessageDeleteComponent;
   let fixture: ComponentFixture<AdminMessageDeleteComponent>;

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         declarations: [AdminMessageDeleteComponent],
      }).compileComponents();
   });

   beforeEach(() => {
      fixture = TestBed.createComponent(AdminMessageDeleteComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
