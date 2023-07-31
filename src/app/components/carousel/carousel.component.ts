import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent {
  content: any[] = [
    {
      imgUrl: '../../../assets/images/carousel-1.jpg',
      title: 'Fashionable Dress',
    },
    {
      imgUrl: '../../../assets/images/carousel-2.jpg',
      title: 'Reasonable Price',
    },
  ];

}
