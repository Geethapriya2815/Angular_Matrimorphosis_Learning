import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fooditemssummary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fooditemssummary.component.html',
  styleUrls: ['./fooditemssummary.component.css'],
})
export class FooditemssummaryComponent {
  // ✅ All used as inputs from parent
  @Input() foodName: string = 'Veg Burger';
  @Input() foodImage: string = 'assets/images/vegburger.jpg';
  @Input() foodPrice: number = 120.8;

  @Output() order = new EventEmitter<void>();

  discount: number = 0.15;
  foodRating: number = 4.5;

  get finalPrice(): number {
    return this.foodPrice - this.foodPrice * this.discount;
  }

  placeOrder() {
    this.order.emit();
  }
}
