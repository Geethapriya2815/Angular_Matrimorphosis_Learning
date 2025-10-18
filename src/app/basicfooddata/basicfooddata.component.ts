import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-basicfooddata',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './basicfooddata.component.html',
  styleUrls: ['./basicfooddata.component.css'],
})
export class BasicFoodDataComponent {
  foodList = [
    { name: 'Veg Burger', price: 120 },
    { name: 'Pasta', price: 250 },
    { name: 'Paneer Pizza', price: 299 },
  ];
}
