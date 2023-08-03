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
    { stocks: 44, category: "Men's Dress", link: 'mens-dresses' },
    { stocks: 68, category: "Women's Dress", link: 'womens-dresses' },
    { stocks: 94, category: "Baby's Dress", link: 'baby-dresses' },
    { stocks: 44, category: 'Accerssories', link: 'accessories' },
    { stocks: 144, category: 'Bags', link: 'bags' },
    { stocks: 424, category: 'Shoes', link: 'shoes' },
  ];
}
