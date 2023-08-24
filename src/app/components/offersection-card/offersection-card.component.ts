import { Component, AfterContentChecked ,ViewChild,ElementRef} from '@angular/core';

@Component({
  selector: 'app-offersection-card',
  templateUrl: './offersection-card.component.html',
  styleUrls: ['./offersection-card.component.css']
})
export class OffersectionCardComponent implements AfterContentChecked {
  url1: any = "https://technext.github.io/eshopper/img/offer-1.png";
  url2: any = "https://technext.github.io/eshopper/img/offer-2.png";
  title1: string = "Spring Collection";
  title2: string = "Winter Collection";
  offer: string = "20% OFF THE ALL ORDER";

  @ViewChild('leftCard') leftCardElement: ElementRef;
  @ViewChild('rightCard') rightCardElement: ElementRef;

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked has been called.');

    // Simulate changing the offer after content has been checked
    this.offer = "New Offer: 30% OFF!";
  }

  ngAfterViewInit() {
    console.log("divya", this.leftCardElement);

    // Update content within the card elements
    if (this.leftCardElement && this.leftCardElement.nativeElement) {
      const titleElement = this.leftCardElement.nativeElement.querySelector('.title');
      if (titleElement) {
        titleElement.textContent = 'New Title for Left Card';
      }
    }

    if (this.rightCardElement && this.rightCardElement.nativeElement) {
      const titleElement = this.rightCardElement.nativeElement.querySelector('.title');
      if (titleElement) {
        titleElement.textContent = 'New Title for Right Card';
      }
    }
  }

}
