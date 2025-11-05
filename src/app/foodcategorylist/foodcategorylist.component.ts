import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from '../highlight.directive'; // ← added import

@Component({
  selector: 'app-foodcategorylist',
  standalone: true,
  imports: [CommonModule, HighlightDirective],
  templateUrl: './foodcategorylist.component.html',
  styleUrls: ['./foodcategorylist.component.css'],
})
export class FoodcategorylistComponent {
  // ...existing code...
  categories: any[] = [
    {
      name: 'Dosa',
      items: ['Ghee roast', 'Paper Roast', 'Masala Dosa'],
    },
    {
      name: 'Idly',
      items: ['Chilli Idli', 'Podi Idly', 'Sambar Idly'],
    },
    {
      name: 'Pongal',
      items: ['Ven Pongal', 'Chakkarai Pongal', 'Millets Pongal'],
    },
  ];
}
