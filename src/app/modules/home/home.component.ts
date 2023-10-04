// Import necessary Angular modules and decorators
import { Component } from '@angular/core';

// Component decorator for HomeComponent
@Component({
  selector: 'app-home', // Selector for the component when used in templates
  templateUrl: './home.component.html', // Path to the HTML template file
  styleUrls: ['./home.component.css'], // Array of style file paths
})
// Class representing the HomeComponent
export class HomeComponent {
  // Array of features with icons and names
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

  // Array of categories with stocks, category names, and links
  categories = [
    { stocks: 44, category: "Men's Dress", link: 'mens-dresses' },
    { stocks: 68, category: "Women's Dress", link: 'womens-dresses' },
    { stocks: 94, category: "Baby's Dress", link: 'baby-dresses' },
    { stocks: 44, category: 'Accessories', link: 'accessories' },
    { stocks: 144, category: 'Bags', link: 'bags' },
    { stocks: 424, category: 'Shoes', link: 'shoes' },
  ];
}
