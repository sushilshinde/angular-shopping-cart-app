// Import necessary Angular testing modules and the component to be tested
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RatingComponent } from './rating.component';

// Describe block for RatingComponent tests
describe('RatingComponent', () => {
  let component: RatingComponent;
  let fixture: ComponentFixture<RatingComponent>;

  // Async configuration of the testing module
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RatingComponent]
    }).compileComponents();
  });

  // Setup before each test
  beforeEach(() => {
    fixture = TestBed.createComponent(RatingComponent);
    component = fixture.componentInstance;
  });

  // Test case: should create
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Test case: should render correct number of stars based on rating input
  it('should render correct number of stars based on rating input', () => {
    // Set the rating to 3
    component.rating = 3;
    // Trigger change detection
    fixture.detectChanges();

    // Get filled and outlined stars elements
    const filledStars = fixture.nativeElement.querySelectorAll('.filled-star');
    const outlinedStars = fixture.nativeElement.querySelectorAll('.outlined-star');

    // Log the number of filled and outlined stars for debugging
    console.log('Filled Stars:', filledStars.length);
    console.log('Outlined Stars:', outlinedStars.length);

    // Check the number of filled and outlined stars based on the rating
    expect(filledStars.length).toBe(3);
    expect(outlinedStars.length).toBe(2);
  });
});
