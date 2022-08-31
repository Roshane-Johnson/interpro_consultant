import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRequestsPageComponent } from './admin-requests-page.component';

describe('AdminRequestsPageComponent', () => {
  let component: AdminRequestsPageComponent;
  let fixture: ComponentFixture<AdminRequestsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRequestsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRequestsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
