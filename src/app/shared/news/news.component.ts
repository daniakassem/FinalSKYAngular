import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {
  images = [
    {
      src: 'https://draxe.com/wp-content/uploads/2022/12/DrAxeEatingCoconutsHeader.jpg',
      title: 'Best Spots For A Summer Vacation',
      description: 'Check out these spots where we provide you with a discount code! Type VACATION when inserting the promo code and behold the surprise!'
    },
    {
      src: 'https://draxe.com/wp-content/uploads/2022/12/DrAxeEatingCoconutsHeader.jpg',
      title: 'Exclusive Offers On Hotels',
      description: 'Find amazing discounts at top hotels with our exclusive summer offers. Limited time only!'
    }
  ];
}
