import { Component, AfterContentChecked ,ViewChild,ElementRef} from '@angular/core';

@Component({
  selector: 'app-offersection-card',
  templateUrl: './offersection-card.component.html',
  styleUrls: ['./offersection-card.component.css']
})
export class OffersectionCardComponent implements AfterContentChecked {
  url1: any = "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/image/rDtN98Qoishumwih/young-woman-shopping-isolated-on-white-background_HarwcTr4Fg_SB_PM.jpg";
  url2: any = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqRmuKzcjuGiApUSzIb9_SM-EA_qyV48_f4g&usqp=CAU";
  title1: string = "Spring Collection";
  title2: string = "Winter Collection";
  offer: string = "20% OFF THE ALL ORDER";

  @ViewChild('leftCard') leftCardElement: ElementRef;
  @ViewChild('rightCard') rightCardElement: ElementRef;

  ngAfterContentChecked() {
       // Simulate changing the offer after content has been checked
    this.offer = "New Offer: 30% OFF!";
  }

  ngAfterViewInit() {
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
