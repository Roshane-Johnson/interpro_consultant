import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopmentServiceComponent } from './development-service.component';

describe('DevelopmentServiceComponent', () => {
  let component: DevelopmentServiceComponent;
  let fixture: ComponentFixture<DevelopmentServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevelopmentServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevelopmentServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
