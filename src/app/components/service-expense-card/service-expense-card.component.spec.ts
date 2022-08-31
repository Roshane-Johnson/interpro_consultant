import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceExpenseCardComponent } from './service-expense-card.component';

describe('ServiceExpenseCardComponent', () => {
  let component: ServiceExpenseCardComponent;
  let fixture: ComponentFixture<ServiceExpenseCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceExpenseCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceExpenseCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
