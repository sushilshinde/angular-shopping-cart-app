import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { OffersectionCardComponent } from './offersection-card.component';

describe('OffersectionCardComponent', () => {
  let component: OffersectionCardComponent;
  let fixture: ComponentFixture<OffersectionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OffersectionCardComponent],
      imports: [MatCardModule] // Import necessary modules here
    }).compileComponents();

    fixture = TestBed.createComponent(OffersectionCardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should display correct titles', () => {
    component.title1 = 'Spring Collection';
    component.title2 = 'Winter Collection';
    fixture.detectChanges();
  
    const titleElements = fixture.nativeElement.querySelectorAll('h1');
    expect(titleElements.length).toBe(2);
    expect(titleElements[0].textContent).toContain('Spring Collection');
    expect(titleElements[1].textContent).toContain('Winter Collection');
  });
  it('should display correct offer', () => {
    component.offer = 'New Offer: 30% OFF!';
    fixture.detectChanges();
  
    const offerElements = fixture.nativeElement.querySelectorAll('h4');
    expect(offerElements.length).toBe(2);
    expect(offerElements[0].textContent).toContain('New Offer: 30% OFF!');
    expect(offerElements[1].textContent).toContain('New Offer: 30% OFF!');
  });
  it('should display correct image source', () => {
    component.url1 = 'https://technext.github.io/eshopper/img/offer-1.png';
    component.url2 = 'https://technext.github.io/eshopper/img/offer-2.png';
    fixture.detectChanges();
  
    const imageElements = fixture.nativeElement.querySelectorAll('img');
    expect(imageElements.length).toBe(2);
    expect(imageElements[0].src).toContain('https://technext.github.io/eshopper/img/offer-1.png');
    expect(imageElements[1].src).toContain('https://technext.github.io/eshopper/img/offer-2.png');
  });
  it('should display buttons', () => {
    fixture.detectChanges();
    const buttonElements = fixture.nativeElement.querySelectorAll('button');
    expect(buttonElements.length).toBe(2);
    expect(buttonElements[0].textContent).toContain("Shop Now")
  });
  it('should render mat-card elements', () => {
    const cardElements = fixture.nativeElement.querySelectorAll('mat-card');
    expect(cardElements.length).toBe(2);
  });
});
