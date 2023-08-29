import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent {
  componentName='Carousel'
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
