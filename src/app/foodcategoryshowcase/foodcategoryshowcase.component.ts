import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-foodcategoryshowcase',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './foodcategoryshowcase.component.html',
  styleUrl: './foodcategoryshowcase.component.css',
})
export class FoodcategoryshowcaseComponent {
  categories = [
    {
      title: 'Pizzas',
      image: '../../images/pizza.png',
      description: 'Hot and cheesy pizzas loaded with toppings.',
    },
    {
      title: 'Burgers',
      image: '../../images/cheese-burger.png',
      description: 'Juicy and crunchy burgers with unique flavors.',
    },
    {
      title: 'Beverages',
      image: '../../images/coffee.png',
      description: 'Cold coffees, soft drinks, and fresh juices.',
    },
  ];
}
