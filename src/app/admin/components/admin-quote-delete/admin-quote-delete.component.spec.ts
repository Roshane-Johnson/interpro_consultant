import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminQuoteDeleteComponent } from './admin-quote-delete.component';

describe('AdminQuoteDeleteComponent', () => {
  let component: AdminQuoteDeleteComponent;
  let fixture: ComponentFixture<AdminQuoteDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminQuoteDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminQuoteDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
