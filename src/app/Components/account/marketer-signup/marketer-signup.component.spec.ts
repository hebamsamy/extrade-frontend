import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketerSignupComponent } from './marketer-signup.component';

describe('MarketerSignupComponent', () => {
  let component: MarketerSignupComponent;
  let fixture: ComponentFixture<MarketerSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketerSignupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketerSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
