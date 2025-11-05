import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { FooditemssummaryComponent } from './fooditemssummary/fooditemssummary.component';
import { BasicFoodDataComponent } from './basicfooddata/basicfooddata.component';
import { FoodcategorylistComponent } from './foodcategorylist/foodcategorylist.component';
import { FoodcategoryshowcaseComponent } from './foodcategoryshowcase/foodcategoryshowcase.component';

import { RatingPipe } from './rating.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterOutlet,
    NavBarComponent,
    FooterComponent,
    UserRegistrationComponent,
    FooditemssummaryComponent,
    BasicFoodDataComponent,
    FoodcategorylistComponent,
    FoodcategoryshowcaseComponent,
    RatingPipe,
   
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'FoodAppPart1';
  foodName = 'Cheesy Pizza';
  foodImage = 'assets/images/pizza.jpg';
  foodPrice = 299;
  foodRating = 4.2;

  orderNow() {
    alert(`${this.foodName} has been added to your cart!`);
  }
}
