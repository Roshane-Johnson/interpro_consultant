import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMessagesPageComponent } from './admin-messages-page.component';

describe('AdminContactsPageComponent', () => {
   let component: AdminMessagesPageComponent;
   let fixture: ComponentFixture<AdminMessagesPageComponent>;

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         declarations: [AdminMessagesPageComponent],
      }).compileComponents();
   });

   beforeEach(() => {
      fixture = TestBed.createComponent(AdminMessagesPageComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
