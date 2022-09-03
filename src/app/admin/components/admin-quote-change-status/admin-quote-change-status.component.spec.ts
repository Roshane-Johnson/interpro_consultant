import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminQuoteChangeStatusComponent } from './admin-quote-change-status.component';

describe('AdminQuoteChangeStatusComponent', () => {
  let component: AdminQuoteChangeStatusComponent;
  let fixture: ComponentFixture<AdminQuoteChangeStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminQuoteChangeStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminQuoteChangeStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
