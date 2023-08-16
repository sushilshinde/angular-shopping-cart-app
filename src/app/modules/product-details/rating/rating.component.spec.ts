
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RatingComponent } from './rating.component';

describe('RatingComponent', () => {
  let component: RatingComponent;
  let fixture: ComponentFixture<RatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RatingComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

 
  it('should render correct number of stars based on rating input', () => {
    component.rating = 3; // Set the rating to 3
    fixture.detectChanges(); // Trigger change detection
  
    const filledStars = fixture.nativeElement.querySelectorAll('.filled-star');
    const outlinedStars = fixture.nativeElement.querySelectorAll('.outlined-star');
  
    console.log('Filled Stars:', filledStars.length);
    console.log('Outlined Stars:', outlinedStars.length);
  
    // Check the number of filled and outlined stars based on the rating
    expect(filledStars.length).toBe(3);
    expect(outlinedStars.length).toBe(2);
  });
  
});

