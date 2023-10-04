import { Component } from '@angular/core';

// Component decorator to define metadata for the component
@Component({
  selector: 'app-carousel', // Selector used to embed the component in HTML
  templateUrl: './carousel.component.html', // Path to the component's HTML template
  styleUrls: ['./carousel.component.css'], // Array of stylesheet files for the component
})
export class CarouselComponent {
  componentName = 'Carousel'; // Property to store the component name

  // Array to hold carousel content, each item is an object with imgUrl and title
  content: any[] = [
    {
      imgUrl: 'http://localhost:4200/assets/images/carousel-1.jpg',
      title: 'Fashionable Dress',
    },
    {
      imgUrl: 'http://localhost:4200/assets/images/carousel-2.jpg',
      title: 'Reasonable Price',
    },
  ];
}
