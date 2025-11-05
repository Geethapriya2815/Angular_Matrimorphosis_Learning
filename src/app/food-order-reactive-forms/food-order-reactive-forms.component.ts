import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
  ValidationErrors,
  AbstractControl,
} from '@angular/forms';

@Component({
  selector: 'app-food-order-reactive-forms',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './food-order-reactive-forms.component.html',
  styleUrls: ['./food-order-reactive-forms.component.css'],
})
export class FoodOrderReactiveFormsComponent {
  orderForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.orderForm = this.fb.group({
      customerName: new FormControl('', {
        validators: [Validators.required, this.noNumbersValidator],
      }),
      email: new FormControl('', {
        validators: [
          Validators.required,
          Validators.pattern(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
          ),
        ],
      }),
      phone: new FormControl('', {
        validators: [Validators.required, Validators.pattern(/^\d{10}$/)],
      }),
      address: new FormControl('', {
        validators: [Validators.required],
      }),
      noOfItems: new FormControl('', {
        validators: [
          Validators.required,
          Validators.min(1),
          Validators.max(10),
        ],
      }),
      specialInstructions: new FormControl(''),
    });

    this.printValues();
  }

  // ✅ Custom validator function
  noNumbersValidator(control: AbstractControl): ValidationErrors | null {
    const hasNumber = /\d/.test(control.value);
    return hasNumber ? { hasNumber: true } : null;
  }

  printValues() {
    console.log('Customer Name:', this.customerName?.value);
    console.log('Email:', this.email?.value);
    console.log('Phone:', this.phone?.value);
  }

  get customerName() {
    return this.orderForm.get('customerName');
  }
  get email() {
    return this.orderForm.get('email');
  }
  get phone() {
    return this.orderForm.get('phone');
  }
  get address() {
    return this.orderForm.get('address');
  }
  get noOfItems() {
    return this.orderForm.get('noOfItems');
  }
}
