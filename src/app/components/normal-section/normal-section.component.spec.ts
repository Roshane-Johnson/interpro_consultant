import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalSectionComponent } from './normal-section.component';

describe('NormalSectionComponent', () => {
  let component: NormalSectionComponent;
  let fixture: ComponentFixture<NormalSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NormalSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
