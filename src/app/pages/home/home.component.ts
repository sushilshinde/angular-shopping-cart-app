import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  featureList = [
    {
      icon: 'done_icon',
      name: 'Quality Products',
    },
    {
      icon: 'local_shipping',
      name: 'Free Shipping',
    },
    {
      icon: 'repeat',
      name: '14 Days Replacements',
    },
    {
      icon: 'phone',
      name: '24/7 Support',
    },
  ];
  categories = [
    { stocks: 44, category: "Men's Dress" },
    { stocks: 68, category: "Women's Dress" },
    { stocks: 94, category: "Baby's Dress" },
    { stocks: 44, category: 'Accerssories' },
    { stocks: 144, category: 'Bags' },
    { stocks: 424, category: 'Shoes' },
  ];
}
