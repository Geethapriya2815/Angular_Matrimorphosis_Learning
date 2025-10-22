import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingPipe } from '../rating.pipe';
@Component({
  selector: 'app-fooditemsummary',
  standalone: true,
  imports: [CommonModule,RatingPipe],
  templateUrl: './fooditemsummary.component.html',
  styleUrl: './fooditemsummary.component.css',
})
export class FooditemsummaryComponent {
  foodName: string;
  originalPrice: number;
  discount: number;
  foodRating: number;
  constructor() {
    this.foodName = 'Veg Burger';
    this.originalPrice = 120.8;
    this.discount = 0.15;
    this.foodRating = 4.5;
  }
}
