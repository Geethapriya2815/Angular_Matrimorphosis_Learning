import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BasicfooddataComponent } from './basicfooddata/basicfooddata.component';
import { FooditemsummaryComponent } from './fooditemsummary/fooditemsummary.component';
import { FoodcategorylistComponent } from './foodcategorylist/foodcategorylist.component';
import { FoodcategoryshowcaseComponent } from './foodcategoryshowcase/foodcategoryshowcase.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { NavbarComponent } from './component/navbar/navbar.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BasicfooddataComponent,FooditemsummaryComponent,FoodcategorylistComponent,FoodcategoryshowcaseComponent,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'FoodAppPart1';
}
