import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-registration',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css'],
})
export class UserRegistrationComponent {
  user = {
    name: '',
    email: '',
    password: '',
    gender: '',
    terms: false,
  };

  registerUser() {
    if (this.user.terms) {
      alert(`Welcome, ${this.user.name}! Registration successful.`);
    } else {
      alert('Please accept the terms and conditions to proceed.');
    }
  }
}
