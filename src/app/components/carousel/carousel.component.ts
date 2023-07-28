import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent {
  interval;
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
  current: number = 0;

  handleChange(action: string, auto: boolean = false): void {
    if (action === 'next') {
      if (this.current > this.content.length - 2) {
        this.current = 0;
        return;
      }
      this.current = this.current + 1;
    } else {
      if (this.current < 1) {
        this.current = this.content.length - 1;
        return;
      }
      this.current = this.current - 1;
    }

    if (!auto) {
      console.log(auto);
      clearInterval(this.interval);
    }
  }
  ngOnInit() {
    this.interval = setInterval(() => this.handleChange('next', true), 5000);
  }
  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
