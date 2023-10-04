// Importing necessary modules and classes for testing
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotFoundComponent } from './not-found.component';

// Test suite for the NotFoundComponent
describe('NotFoundComponent', () => {
  let component: NotFoundComponent;
  let fixture: ComponentFixture<NotFoundComponent>;

  // Setup before each test
  beforeEach(() => {
    // Configuring the testing module with the component to be tested
    TestBed.configureTestingModule({
      declarations: [NotFoundComponent],
    });

    // Creating an instance of the component and its associated fixture
    fixture = TestBed.createComponent(NotFoundComponent);
    component = fixture.componentInstance;

    // Triggering change detection to update the component
    fixture.detectChanges();
  });

  // Test case: Ensure the component is created successfully
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Test case: Ensure rendering of the "Page Not Found" message
  it('should render the "Page Not Found" message', () => {
    // Finding the 'h1' element containing the page not found message
    const pageNotFoundMessage = fixture.nativeElement.querySelector('h1');

    // Expecting the text content to contain 'Page Not Found'
    expect(pageNotFoundMessage.textContent).toContain('Page Not Found');
  });

  // Test case: Ensure the correct CSS class for centering is applied
  it('should have the correct CSS class for centering', () => {
    // Finding the element with the class 'flex-center'
    const centeringDiv = fixture.nativeElement.querySelector('.flex-center');

    // Expecting the centering class to be present
    expect(centeringDiv).toBeTruthy();
  });
});
