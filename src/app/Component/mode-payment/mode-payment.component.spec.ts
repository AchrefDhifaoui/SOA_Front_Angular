import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModePaymentComponent } from './mode-payment.component';

describe('ModePaymentComponent', () => {
  let component: ModePaymentComponent;
  let fixture: ComponentFixture<ModePaymentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModePaymentComponent]
    });
    fixture = TestBed.createComponent(ModePaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
