import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsModalComponent } from './contact-us-modal.component';

describe('RequestModalComponent', () => {
  let component: ContactUsModalComponent;
  let fixture: ComponentFixture<ContactUsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactUsModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactUsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
