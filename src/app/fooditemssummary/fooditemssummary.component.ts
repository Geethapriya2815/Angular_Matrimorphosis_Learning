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
  @Input() foodName: string = 'Veg Burger';
  @Input() foodPrice: number = 120.8; // renamed from originalPrice
  @Input() discount: number = 0.15;
  @Input() foodRating: number = 4.5;
  @Input() imagePath: string = 'assets/images/vegburger.jpg';

  @Output() order = new EventEmitter<void>();

  get finalPrice(): number {
    return this.foodPrice - this.foodPrice * this.discount;
  }

  placeOrder() {
    this.order.emit();
  }
}
