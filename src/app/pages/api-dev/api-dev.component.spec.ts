import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiDevComponent } from './api-dev.component';

describe('ApiDevComponent', () => {
  let component: ApiDevComponent;
  let fixture: ComponentFixture<ApiDevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiDevComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
