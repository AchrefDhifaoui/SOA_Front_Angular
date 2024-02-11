import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mode-payment',
  templateUrl: './mode-payment.component.html',
  styleUrls: ['./mode-payment.component.css']
})
export class ModePaymentComponent implements OnInit {
  checkoutForm!: FormGroup;
  isCartBancaireSelected: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    // Initialize the form here
    this.checkoutForm = this.fb.group({
      paymentMethod: ['cheque'], // Set the default value to 'cheque'
    });

    // Subscribe to changes in the paymentMethod control
    this.checkoutForm.get('paymentMethod')!.valueChanges.subscribe((value) => {
      // Update the visibility based on the selected payment method
      this.isCartBancaireSelected = value === 'cartBancaire';
    });
  }
}
