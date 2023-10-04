// Importing necessary modules and classes for testing
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { OffersectionCardComponent } from './offersection-card.component';

// Test suite for the OffersectionCardComponent
describe('OffersectionCardComponent', () => {
  let component: OffersectionCardComponent;
  let fixture: ComponentFixture<OffersectionCardComponent>;

  // Setup before each test
  beforeEach(async () => {
    // Configuring the testing module with the component to be tested and necessary imports
    await TestBed.configureTestingModule({
      declarations: [OffersectionCardComponent],
      imports: [MatCardModule] // Import necessary modules here
    }).compileComponents();

    // Creating an instance of the component and its associated fixture
    fixture = TestBed.createComponent(OffersectionCardComponent);
    component = fixture.componentInstance;
  });

  // Test case: Ensure the component is created successfully
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Test case: Ensure correct display of titles
  it('should display correct titles', () => {
    // Setting titles for testing
    component.title1 = 'Spring Collection';
    component.title2 = 'Winter Collection';

    // Triggering change detection to update the component
    fixture.detectChanges();

    // Finding and checking the title elements
    const titleElements = fixture.nativeElement.querySelectorAll('h1');
    expect(titleElements.length).toBe(2);
    expect(titleElements[0].textContent).toContain('Spring Collection');
    expect(titleElements[1].textContent).toContain('Winter Collection');
  });

  // Test case: Ensure correct display of offer
  it('should display correct offer', () => {
    // Setting the offer for testing
    component.offer = 'New Offer: 30% OFF!';

    // Triggering change detection to update the component
    fixture.detectChanges();

    // Finding and checking the offer elements
    const offerElements = fixture.nativeElement.querySelectorAll('h4');
    expect(offerElements.length).toBe(2);
    expect(offerElements[0].textContent).toContain('New Offer: 30% OFF!');
    expect(offerElements[1].textContent).toContain('New Offer: 30% OFF!');
  });

  // Test case: Ensure correct display of image sources
  it('should display correct image source', () => {
    // Setting image URLs for testing
    component.url1 = 'https://technext.github.io/eshopper/img/offer-1.png';
    component.url2 = 'https://technext.github.io/eshopper/img/offer-2.png';

    // Triggering change detection to update the component
    fixture.detectChanges();

    // Finding and checking the image elements
    const imageElements = fixture.nativeElement.querySelectorAll('img');
    expect(imageElements.length).toBe(2);
    expect(imageElements[0].src).toContain('https://technext.github.io/eshopper/img/offer-1.png');
    expect(imageElements[1].src).toContain('https://technext.github.io/eshopper/img/offer-2.png');
  });

  // Test case: Ensure buttons are displayed
  it('should display buttons', () => {
    // Triggering change detection to update the component
    fixture.detectChanges();

    // Finding and checking the button elements
    const buttonElements = fixture.nativeElement.querySelectorAll('button');
    expect(buttonElements.length).toBe(2);
    expect(buttonElements[0].textContent).toContain("Shop Now");
  });

  // Test case: Ensure rendering of mat-card elements
  it('should render mat-card elements', () => {
    // Finding the card elements
    const cardElements = fixture.nativeElement.querySelectorAll('mat-card');
    expect(cardElements.length).toBe(2);
  });
});
