import { Component } from '@angular/core';

@Component({
  selector: 'app-basicfooddata',
  standalone: true,
  imports: [],
  templateUrl: './basicfooddata.component.html',
  styleUrl: './basicfooddata.component.css',
})
export class BasicfooddataComponent {
  foodName: string = 'Pizza';
  foodImage: string = '../images/pizza.png';
  foodPrice: number = 275;

  orderNow() {
    alert(`${this.foodName} has been added to the cart`);
  }
}
