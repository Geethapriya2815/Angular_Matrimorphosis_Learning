import { Routes } from '@angular/router';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { FooditemssummaryComponent } from './fooditemssummary/fooditemssummary.component';
import { FoodcategorylistComponent } from './foodcategorylist/foodcategorylist.component';

export const routes: Routes = [
  { path: '', component: FooditemssummaryComponent }, 
  { path: 'menu', component: FoodcategorylistComponent }, 
  { path: 'register', component: UserRegistrationComponent }, 
  { path: '**', redirectTo: '' }, 
];
