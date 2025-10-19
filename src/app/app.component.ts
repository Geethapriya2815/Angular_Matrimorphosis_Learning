import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooditemssummaryComponent } from './fooditemssummary/fooditemssummary.component';
import { BasicFoodDataComponent } from './basicfooddata/basicfooddata.component';
import { RatingPipe } from './rating.pipe';
import { FoodcategorylistComponent } from './foodcategorylist/foodcategorylist.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FooditemssummaryComponent,
    BasicFoodDataComponent,
    RatingPipe,
    FoodcategorylistComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'FoodAppPart1';
  foodName: string = 'Cheesy Pizza';
  foodImage: string = 'assets/images/pizza.jpg';
  foodPrice: number = 299;
  foodRating: number = 4.2;

  orderNow() {
    alert(`${this.foodName} has been added to your cart!`);
  }
}
