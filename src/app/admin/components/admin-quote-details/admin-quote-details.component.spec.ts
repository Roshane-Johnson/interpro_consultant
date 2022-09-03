import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminQuoteDetailsComponent } from './admin-quote-details.component';

describe('AdminQuoteDetailsComponent', () => {
  let component: AdminQuoteDetailsComponent;
  let fixture: ComponentFixture<AdminQuoteDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminQuoteDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminQuoteDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
